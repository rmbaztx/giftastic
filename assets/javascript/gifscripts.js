//pseudo-code and/or comment how to complete this code



//so, I need:

//initialize vars

//create initial topic buttons

//listen to the class of the topic buttons; when one is clicked, use 'this' to build and run
//the Giphy query using Ajax

//build a queryURL for Giphy GET

$.ajax({
    url: queryURL,
    method: "GET"
  })

//for a certain number of results, retrieve the image and the rating into vars

//assign image's url to the image

//toggle between animated and still images

//create a form which allows the user to create a new topic

//if the user submits a new topic, create an associated button with name, etc. in order
//that the user can click it and retrieve associated gifs, prepended to what is already
//displayed

//this week's exercises:

//pausing gifs -- toggle between animated gif and static gif

//button triggered -- build a queryURL, use Ajax to run query, receive response, retrieve //rating and image, change attr of ?? for image src=,  

//dynamic elements -- listen to three buttons, build a queryURL from the button's name (using 'this'), run the query, retrieve the response, find the rating, create and store an image tag, change the attr of the image for src="http. . . ", append the paragraph (rating) and the image to the animalDiv, prepend the entire animalDiv to "gifs-appear-here" div

//initialize vars -- 

//create first array of topics -- 

//cat button -- build a queryUrl, create a new img, attach the image from the url to the //<img>, prepend the image before the ones we already have loaded and displayed

