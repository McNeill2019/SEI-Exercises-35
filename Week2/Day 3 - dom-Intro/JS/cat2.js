console.log('Hello Cat');

let catGif = document.querySelector("img");
let body = document.querySelector("body");
let height = catGif.style.top = '300';

// catGif.style.position = 'absolute';
// catGif.style.left= '0';

var watchCatWalk = function() {

  var oldLeft = parseInt(catGif.style.left);
  var newLeft = oldLeft + 10;
  catGif.style.left = newLeft + 'px';
  if( (newLeft + catGif.width) > window.innerWidth ){

    // window.setInterval (walkBack, 50);
    clearInterval(forward);
    catGif.style.webkitTransform ="scaleX(-1)";
    catGif.style.msTransform="scaleX(-1)";
    catGif.style.transform = "scaleX(-1)";
    backward = window.setInterval(walkBack, 50);

  } else if ( (newLeft >= (window.innerWidth/2) - (catGif.width/2)) && (newLeft >= (window.innerWidth/2) - (catGif.width/2) + 100)) {
    clearInterval(forward);
    catGif.src = "https://media.giphy.com/media/33OrjzUFwkwEg/giphy.gif";
    body.style.backgroundColor = "yellow";
    window.setInterval(catDance, 20);
  }
};

var walkBack = function() {
  var oldLeft = parseInt(catGif.style.left);
  var newLeft = oldLeft - 10;
  catGif.style.left = newLeft + 'px';
  if(newLeft <= 0){
    clearInterval(backward);
    catGif.style.webkitTransform ="scaleX(1)";
    catGif.style.msTransform="scaleX(1)";
    catGif.style.transform = "scaleX(1)";
    forward = window.setInterval(watchCatWalk, 50);
  }
};

var catDance = function(){
 var oldTop = height;
 newTop = oldTop - 10;
 catGif.style.top = newTop + 'px'
 if (oldTop >= window.innerHeight)
 newTop = oldTop - 10;
 catGif.style.top = newTop + 'px';
};

let forward = window.setInterval(watchCatWalk, 50);
// let backward = window.setInterval(walkBack, 50);


//
// var walkBack = function () {
//   newLeft = newLeft - 10;
//   img.style.left = newLeft + 'px';
//   if(parseInt(img.style.left) === 0){
//   clearInterval(backward);
// }
// };
// let backward = window.setInterval(walkBack, 50);
