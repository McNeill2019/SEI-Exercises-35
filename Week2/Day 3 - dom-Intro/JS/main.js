// console.log('hello dom');
//
// const billImage = document.getElementById( 'firstBill' );
//
// console.log( billImage );
//
// billImage.src = 'http://placebear.com/300/300';
//
// const bestDogItem = document.getElementById('bestDog');
//
// console.log( 'best dog:', bestDogItem);
//
// // Change the contects of this tag (the stuff inside the tag)
// bestDogItem.innerHTML = 'Ruby';
//
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

//The Book List Exercise

// console.log('hello');
//
// //creating a variable called body storing the body node of the html document.
// const body = document.querySelector('body');
//
// //accessing the body node style and setting a font-family to it of arial, sans-serif.
// body.style.fontFamily =  "arial, sans-serif";
//
// //creating variables and storimg the id's of the span elments of the HTML document.
// const nickname = document.querySelector('#nickname');
// const favorite = document.querySelector('#favorites');
// const hometown = document.querySelector('#hometown');
//
// //setting the inner HTML of the spans using the variables storing the id's of the spans.
// nickname.innerHTML = "Jambo";
// favorites.innerHTML = "Football, tennis";
// hometown.innerHTML = "Saddleworth";
//
// //saving all the list item tags in a variable.
// const listItems = document.querySelectorAll('li');
//
// //looping/iterating through these list items and adding a class name to each of listItem.
// for (var i = 0; i < listItems.length; i++) {
//   listItems[i].className = "listItem";
// }
//
// //creating an img element and storing it in a variable called bill.
// const bill = document.createElement('img');
//
// //setting the src of the img to a bill murray image.
// bill.src="http://www.fillmurray.com/500/500";
//
// //attaching the image to the body of the website so it appears.
// document.body.appendChild( bill );

var books = [
  {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    alreadyRead: false
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
  }
];

for (var i = 0; i < books.length; i++) {
  const book = books[i];
  const title = book.title;
  const author = book.author;
  const content = (`Title:${title}, Author:${author}`);
  const paragraph = document.createElement ('p');
  const text = paragraph.innerHTML(content);
  paragraph.appendChild(text);
  document.body.appendChild(paragraph);
};
