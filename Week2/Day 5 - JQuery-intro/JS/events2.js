// console.log('hello');
//
// //Click Function
// var clickFunction = function () {
// $(this).css("border", "1px solid red");
// }
//
// $('#kitty').on("click", clickFunction)
//
//
// // Mouse Down Function
// $('#kitty').on("mouseup", function (ev) {
//   console.log( 'clicked!', ev);
// });
//
// // Mouse Up Function
// var mouseUp = function () {
//
// $(this).css("border", "1px solid red")
//
// }
//
// $('marquee').on("mouseup", mouseUp )
//
// //Mouse Move function ()
// var mouseMove = function () {
//
// $(this).css("border", "1px solid red");
//
// }
//
// $('marquee ul li').on("mousemove", mouseMove )
//
// //change function ()
//
// var change = function () {
//
// $(this).css("border", "1px solid red");
//
// }
//
// $('#toggle').on("change", change)
//
// //focus function ()
//
// var focus = function () {
//
// $(this).css("border", "1px solid red");
//
// }
//
// $('#fade').on("focus", focus)
//
//
// //blur Function
//
// var blur = function () {
//
// $(this).css("border", "1px solid red");
//
// }
//
// $('#features').on("blur", blur)
//
//
// //keydown Function
//
// $('input[type=text]').on('keydown', function (ev) { $(this).css("font-size", "30px");
// });
//
// //keypress function ()
//
// var keypress = function () {
//
// $(this).css("border", "1px solid red");
//
// }
//
// $().on("keypress", keypress)
//
//
// //keyup function ()
//
// var keyUp = function () {
//
// $(this).css("border", "1px solid red");
//
// }
//
// $().on("keyup", keyUp)
//

// cause the toggle button to toggle the visibility of the first bear image.
$('#toggle').on('click', function(){
 console.log('#toggle clicked');
 $('.triple-kitty1').toggle();
});


// $('#kitty').animate({
//   width: '100vw',
//   borderRadius: '50%'
// }, 3000);

$('#kitty').css({
  position: 'absolute',
  left: 0
});

// $('#kitty').animate({
//   left:window.innerWidth
// }, 3000);

$('#kitty').animate({
  left:window.innerWidth,
  width: '100vw'
}, 3000,
function(){
  console.log('animation complete!');
});

//
// //Fade function ()
//
// var fade1 = function () {
//
// $(this).css("border", "1px solid red");
//
// }
//
// $().on("fade", fade1)
//
//
// //show function ()
//
// var show1 = function () {
//
// $(this).css("border", "1px solid red");
//
// }
//
// $().on("show", show1)
