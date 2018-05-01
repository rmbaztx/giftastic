//pseudo-code and/or comment how to complete this code


//remember to add line that makes sure html is ready
//
$(document).ready(function(){ 
//initialize vars
var transportationType = "";
var topics = [
    "classic cars",
    "sports cars",
    "race cars",
    "racing carts",
    "sailboats",
    "motorcycles",
    "airplanes"
];
//create initial topic buttons in div "gifs-appear-here" 
 function watchGifs() {
            $(".gif").on("click", function() {
            // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
            var state = $(this).attr("data-state");
            console.log(state);
            // If the clicked image's state is still, update its src attribute to what its data-animate value is.
            // Then, set the image's data-state to animate
            // Else set src to the data-still value
            if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
            } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
            }
        })
    }
//add line to ignore default clearing/refresh of screen (may go below button.click)
function renderButtons() {
    $("#topic-view").empty();
for (var i = 0;i < topics.length;i++) {
    var a = $("<button>");
    a.addClass("mode");
    a.attr("transportationType",topics[i]);
    a.text(topics[i]);
    $("#topic-view").append(a);
    console.log("topic " + i + " = " + topics[i]);
}
watchButtons();
watchGifs();   
}
//listen to the class of the topic buttons; when one is clicked, use 'this' to build and run
//the Giphy query using Ajax
renderButtons();
//try changing "button" to "#mode" - buttons do not work; .mode: buttons work until I add 
// a new topic; should this be function() or function(event)?
function watchButtons() {
    $(".mode").on("click", function(event) {
    console.log("topic button clicked");
    var mode = $(this).attr("transportationType");
    
//build a queryURL for Giphy GET

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        mode + "&rating=pg" + "&api_key=eMokl5ebGH3wWT0NUr5np8egSO8rqlHO";
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    })

//queries run OK whenever click is captured OK
//for a certain number of results, retrieve the image and the rating into vars
// After the data comes back from the API
.then(function(response) {
    // Storing an array of results in the results variable
    var results = response.data;
    console.log(results);

    // Looping over every result item
    for (var i = 0; i < 10; i++) {  //set &limit=10 to be able to change this to //topics.length

      // Only taking action if the photo has an appropriate rating
      // Replace this by adding "&rating= " in the queryURL
      if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
        // Creating a div with the class "item"
        var gifDiv = $("<div class='item'>");

        // Storing the result item's rating
        var rating = results[i].rating;

        // Creating a paragraph tag with the result item's rating
        var p = $("<p>").text("Rating: " + rating);

        // Creating an image tag
        var modeImage = $("<img>");

        // Giving the image tag an src attribute of a property pulled off the
        // result item
        // filename will be fixed_height or fixed_height_still for 200 x 200
        // animated or still
        modeImage.attr("src", results[i].images.fixed_height_still.url);
        modeImage.attr('data-animate', results[i].images.fixed_height.url);
        modeImage.attr('data-still', results[i].images.fixed_height_still.url);
        modeImage.attr("data-state","still");
        modeImage.attr("class", "gif");

        // Appending the paragraph and personImage we created to the "gifDiv" div we created
        
        gifDiv.append(modeImage);
        gifDiv.append(p);

        // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
        $("#gifs-appear-here").prepend(gifDiv);
      }
    }
    watchGifs();
})
    //renderButtons();
});
}
       
    
//toggle between animated and still images (see pausing gifs)
//Watch for a class = "gif" button click, change img src to still or animate
//by changing src=filename and setting flag to still or animate

//this week's exercises:

//pausing gifs -- toggle between animated gif and static gif  

      //may need this in first line of renderButtons function to prevent duplicates
      //$("#topics-view").empty();

      // This function handles events where button to add a new topic is clicked
      $("#add-topic").on("click", function(event) {
        event.preventDefault(); //new button would only briefly display without this line

        // This line will grab the text from the input box
        var newTopic = $("#topic-input").val().trim();
        // The topic from the textbox is then added to our array
        topics.push(newTopic); // OK to here, but then none of the buttons work
        console.log("Number of topics = " + topics.length); //OK
        //clear the button
        // $("#topic-input").empty(); //this did not work
        $("#topic-input").val("");
        // calling renderButtons which handles the processing of our topics array
        // I believe this belongs here, but the buttons appear disabled after trying
        // to enter a new topic button - even though the button is generated
        renderButtons(); //OK to here; why don't topic button clicks work after this?????
        
      
    })
      });
    
// I suspect the problem is where I have the on.click monitoring - do they need to be in  
// different spots, such as within the renderButton() function?