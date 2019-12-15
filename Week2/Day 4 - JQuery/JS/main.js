// jQuery: Exercise 1:

// Making a Video Player with the DOM API

// Create an array of every link on the page using document.querySelectorAll(cssSelector)
var allLinks= document.querySelectorAll('a');

//Iterate through the array.
for (var i = 0; i < allLinks.length; i++) {

// Find the current href and store into a variable;
const hRef = allLinks[i].href;

// Generate a thumbnail URL using youtube.generateThumbnailUrl(videoUrl)
const youTubeUrl = youtube.generateThumbnailUrl(hRef);

//Create an image element using document.createElement('img')
const image = document.createElement('img');

//Set the "src" of the IMG element.
image.src = youTubeUrl;

//Append the IMG to the link using element.appendChild(element)
  allLinks[i].appendChild( image );
};
