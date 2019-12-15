// console.log('events');
//
// // Define the function
// //Functions live inside variables, in JS!
// //They are 'first-class'
//
// const addTwo = function( num ) {
//   console.log( 'Inside addTwo()');
//   const result = num + 2;
//
//   return result ;
// };
//
// // Run the function
// const returnValue = addTwo( 6 );
//
// console.log( returnValue );

const sayHello = function () {
  console.log('Hello World!');
};
//
// sayHello();

//Run another function for us, nicely
//This function takes ANOTHER FUNCTION as it's argument! <exploding-brain.gif>

const runNicely = function( functionToRunNicely ) {
console.log ('hello, I am about to run your function for you! I hope that is to your liking');

functionToRunNicely(); //Run the functuon that was passed in.

console.log('I hope that went well for you');

};

// // Pass in the the *definition* of the function to runNicely.
// runNicely( sayHello );

//Anonymous function!
//We define it at the very point of passing it in as an argument to runNicely()
//This is basically a callback!

runNicely( function() {
  console.log('screw you, runNicely!');
} );


const h1 = document.querySelector('h1');

// console.log( h1 );

h1.addEventListener('mousemove', function( e ){
  console.log('The H1 was clicked!');
  console.log( e.screenX, e.screenY );
});

// // This won't work with anonymous functions!
// h1.removeEventListener('mousemove', function(){
//   console.log('The H1 was clicked!');
// } );

// Run some code in response to click events anywhere in the document.
document.addEventListener('click', function ( e ) {
  console.log ( e.target );
  console.log( e.screenx, e.screenY );
});


//Timers

window.setinterval(function() {

bill.setAttribute("width", bill.width += 10); , 10. 
}
