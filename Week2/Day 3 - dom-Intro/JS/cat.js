console.log('Hello Cat');

// let catGif = document.querySelector("img");
//
// catGif.style.position = 'absolute';
// catGif.style.left= '0';
// catgif.style.right= '0';
//
//
//
// var watchCatWalk = function() {
//   var oldLeft = parseInt(catGif.style.left);
//   var newLeft = oldLeft + 10;
//   catGif.style.left = newLeft + 'px';
//   if (catGif.style.left === "maxWidth"){
//   window.setInterval (walkBack, 50);
//   clearInterval(forward);
//   }
// };
//
// var walkBack = function () {
//   newLeft = newLeft - 10;
//   img.style.left = newLeft + 'px';
//   if(parseInt(img.style.left) === 0){
//   clearInterval(backward);
// }
// };
//
// let forward = window.setInterval(watchCatWalk, 50);
// let backward = window.setInterval(walkBack, 50);



var img = document.querySelector('img')

img.style.left = 0;
img.style.right = 0;

var newleft = 0
var maxWidth = window.innerWidth -296; //296 is the length od the cat
var newRight = maxWidth;
var animateright;

var  catWalk = function(){

    newleft +=  10;
    img.style.left = newleft + 'px';

if(parseInt(img.style.left) >= maxWidth)
    {
       // clearInterval(animate);
        img.style.webkitTransform ="scaleX(-1)";
        img.style.msTransform="scaleX(-1)";
        img.style.transform = "scaleX(-1)";
        animateright = setInterval(walkBack,100);
        clearInterval(animate);
    }

};

var walkBack = function() {
 console.log('walking back')
    newleft = newleft - 10;
    img.style.left = newleft + 'px';
      if(parseInt(img.style.left) === 0){
        clearInterval(animateright);
        //clearInterval(animate);
      }
}

var animate = setInterval(catWalk,100);
//var animateright = setInterval(walkBack,30);




//Cat on magic carpet.

var dog = document.querySelector('iframe');

dog.style.top = 0;
dog.style.bottom = 0;
dog.style.position = 'absolute';

var maxHeight = window.innerHeight - 300;

var watchDogFly = function () {

  var oldTop = parseInt(dog.style.top);

  var newTop = oldTop + 10;
  dog.style.top = newTop + 'px';


  if(parseInt(img.style.top) >= maxHeight);
      {
         // clearInterval(animate);
          iframe.style.webkitTransform ="scaleX(-1)";
          iframe.style.msTransform="scaleX(-1)";
          iframe.style.transform = "scaleX(-1)";
          // animateDown = setInterval(walkBack,100);
          clearInterval(flyThere);
  }
};

var flyThere = window.setInterval(watchDogFly, 100);
