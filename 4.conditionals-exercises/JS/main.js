// Conditionals Exercises

//What numbers bigger

/*
Write a function named greaterNum that:
- takes 2 arguments, both numbers.
- returns whichever number is the greater (higher) number.
- Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
*/

const greaterNum = function (numberOne, numberTwo) {
    if (numberOne > numberTwo) {
    return (`The greater number is ${numberOne}`) }
    else {
    return (`The greater number is ${numberTwo}`)
}
};

const example1 = greaterNum (21,35);
const example2 = greaterNum (45,25);


//The World Translator

/*
Write a function named helloWorld that:
- takes 1 argument, a language code (e.g. "es", "de", "en")
- returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
- Call that function for each of the supported languages and log the result to make sure it works.
*/

const helloWorld = function (languageCode) {
  if ('en' === languageCode){
  return 'Hello';
} else if ('es' === languageCode) {
  return 'Adios';
} else if ('de' === languageCode) {
  return 'Guten Tag';
  } else {
  console.log ("language not recognised");
}
};

console.log( helloWorld('de') );
console.log( helloWorld('en') );
console.log( helloWorld('es') );
console.log( helloWorld('br') );

//The Grade Assigner

const assignGrade = function (score) {
  if (score >= 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 60) {
    return 'D';
  } else {
    return 'F';
  }
};

console.log( assignGrade(100) );
console.log( assignGrade(70) );
console.log( assignGrade(50) );
console.log( assignGrade(14) );

//The Pluraliser
// Write a function named pluralize that:
// - takes 2 arguments, a noun and a number.
// - returns the number and pluralized form, like "5 cats" or "1 dog".
// - Call that function for a few different scores and log the result to make sure it works.

const pluralize = function (noun, number) {
   if (number >= 2) {
   return (`${number} ${noun}s`);
 } else {
   return (`${number} ${noun}`);
 }
};

console.log( pluralize("dog",2) );
console.log( pluralize("cat", 1) );
