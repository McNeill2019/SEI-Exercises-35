console.log('hello dom');

//Ask the DOM to give us the element we want to change
const $billImage = $('#firstBill');

console.log( $billImage );

//change something about the element

//calling attr with one argument means GET the current value of this attribute
console.log('current src:', $billImage.attr('src'));

//calling attr() with two arguments means SET this attribute to THAT value.
$billImage.attr('src', 'http://placebear.com/300/300');

// const bestDogItem = document.getElementById('bestDog');
// console.log( 'best dog:', bestDogItem);
// // Change the contects of this tag (the stuff inside the tag)
// bestDogItem.innerHTML = 'Ruby';

const $bestDogItem = $('#bestDog');

const dogText = $bestDogItem.html() //This is a getter

console.log('Best dog text:', dogText);

$bestDogItem.html('Ruby');//This is a setter!

$('#bestDog').html('Ruby');

//This only gives us the contents of the FIRST matching Element
console.log( $('p').html() );

//If we want to print tjhem all, we can loop through each element
//by passing a function to the each () method:

$('p').each(function(){
  //The special variable 'this' will contain the current element
  //as we iterate through all of them.
  const contents =$(this).html();
  // console.log( contents );
} );



//This is a normal function:

// // get all paragraph tags and print their contents
// const pTags = document.querySelectorAll('p');
//
// //
// for ( var i = 0; i < pTags.length; i++ ) {
//     const p = pTags[i];
//     console.log(p.innerHTML);
//     p.innerHTML += '<strong>"AMAZING"</strong>';
//
//     p.style.backgroundColor = 'darkgoldenrod';
//
// }
//
// //Creating a brand new DOM node (currently detached from the page, just in JS memory)
// const newBillImage = document.createElement('img');
//
// //set some attributes of the object
// newBillImage.src = 'http://fillmurray.com/400/400';
// newBillImage.style.border = '10px solid lavender';
//
// //Actually attach our new detached DOM node to the DOM (making it visible)
// document.body.appendChild ( newBillImage );
// console.log('hello');
//
// const body = document.querySelector('body');
//
// body.style.fontFamily =  "arial, sans-serif";
//
//
// const nickname = document.querySelector('#nickname');
// const favorite = document.querySelector('#favorites');
// const hometown = document.querySelector('#hometown');
//
// nickname.innerHTML = "Hi";
// favorites.innerHTML = "How are you?";
// hometown.innerHTML = "I'm good thanks";
//
// const listItems = document.querySelectorAll('li');
//
// for (var i = 0; i < listItems.length; i++) {
//   listItems[i].className = "listItem";
// }
//
// const bill = document.createElement('img');
//
// bill.src="http://www.fillmurray.com/500/500";
//
// document.body.appendChild( bill );
