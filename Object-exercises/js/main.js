
//The Reading List:

// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).

// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".

// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'


const books = [

  { title: "The Hobbit",
    author: "JRR Tolkien",
    alreadyRead: true
  },

  {
    title: "Da Vinci Code",
    author: "Dan Child",
    alreadyRead: true
  },

  {
    title: "How to be a footballer",
    author: "Peter Crouch",
    alreadyRead: false
  },

  {
    title: "Behind the mask",
    author: "Tyson Fury",
    alreadyRead: false
  },

];

for ( var i = 0; i < books.length; i++ ) {
    var bookTitleAndAuthor = books[ i ];
    console.log( bookTitleAndAuthor.title,":", bookTitleAndAuthor.author );
    if (bookTitleAndAuthor.alreadyRead) {
      console.log (`You have read ${bookTitleAndAuthor.title}, by ${bookTitleAndAuthor.author}`);
    } else {
      console.log (`You haven't read ${bookTitleAndAuthor.title}, by ${bookTitleAndAuthor.author}`)
    }
};


//The Recipe Card

// Never forget another recipe!

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).

// On separate lines (one console.log statement for each), log the recipe information so it looks like:


// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

const recipe = {

	title: "Sticky date pudding",
	serves: 4,
	ingredients: ["dates", "pudding","cinnamon"]
};

console.log(`Title: ${recipe.title}`);
console.log(`Serves: ${recipe.serves}`);
console.log("ingredients:");

for ( var i = 0; i < recipe.ingredients.length; i++ ) {
    var ingredient = recipe.ingredients[i];
    console.log(ingredient);
};

// The Movie Database

// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).

// Print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

// Maybe the join method will be helpful here


const faveMovie = {

	title: "Back to the Future",
	duration: 120,
	stars: ["*","*","*","*","*"]

};

console.log(`${faveMovie.title} lasts for ${faveMovie.duration} minutes. Stars: 5 ${faveMovie.stars.join()}`);

// Day 5 Exercise

// Leap Year Warmup Exercise

// Do this in HTML and JS!

// Write a function that will take any given year and return whether it is a leap year or not. Remember that a leap year is:

// Every year that is evenly divisible by 4 Except if it is evenly divisible by 100... Unless it is also divisible by 400

// Test Data... Make sure it is working!

// 1997 is not a leap year, it should return false
// 1996 is a leap year, it should return true
// 1900 is not a leap year, it should return false
// 2000 is a leap year, it should return true
// How to structure it...

// We want a custom function called isLeapYear

//Bonus!

// Ask the user what number they want to test

// Watch a whole heap of information about leap years... http://www.youtube.com/watch?v=xX96xng7sAE

// © 2019 GitHub, Inc.


const isLeapYear = function( year ) {

  if (year % 4 === 0) {

      if ( year % 100 !== 0 || year % 400 === 0 ) {
          return true;
      } else {
          return false;
      }

      } else {
      return false;
      }
}

console.log(isLeapYear(1997))
console.log(isLeapYear(1996))
console.log(isLeapYear(1900))
console.log(isLeapYear(2000))


const isLeap = function ( year ) {

  if ( ( year % 4 === 0) && ( ( year % 100 !== 0 || year % 400 === 0 ) ) ) {

    return true;

  } else {
    return false;
  }
};

console.log(isLeap(prompt('Enter Year') ) );
