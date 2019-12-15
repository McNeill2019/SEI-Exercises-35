// jQuery: Exercise 1:

// Making a Video Player with the DOM API

// Create an array of every link on the page using document.querySelectorAll(cssSelector)
var $aTag = $( "a" );

//Iterate through the array.
// Find the current href and store into a variable;
var $href = $aTag.each(function () {

let $href = $(this).attr('href');

// Generate a thumbnail URL using youtube.generateThumbnailUrl(videoUrl)
let $youTubeUrl = youtube.generateThumbnailUrl('href');

//Create an image element using document.createElement('img')
var $img = $('<img>');

// Set the "src" of the IMG element.

$img.attr('src','$youTubeUrl');

//Append the IMG to the link using element.appendChild(element)

$(this).append($img);

});
