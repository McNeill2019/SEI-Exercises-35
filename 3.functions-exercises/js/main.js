//Day 2 Function Exercises

console.log('Hello World!');

// The Fortune Teller

const tellFortune = function (numChildren, partnersName, geoLocation, jobTitle) {
  return (`You will be a ${jobTitle} in ${geoLocation}, and married to ${partnersName} with ${numChildren} children`);
};

const fortune1 = tellFortune(4, "Lisa", "Clovelly", "Dolphin Trainer");

const fortune2 = tellFortune(2, "Sally", "Glasgow", "Painter");

const fortune3 = tellFortune(1, "Jane", "Manchester", "Pole Dancer");

// The Puppy Age Calculator

const calculateDogAge = function(puppysAge) {
    const dogYears = puppysAge * 7;
    return (`Your doggie is ${dogYears} years old in dog years`);
};

const puppy1 = calculateDogAge (10);
const puppy2 = calculateDogAge (12);
const puppy3 = calculateDogAge (14);

//The Lifetime Supply Calculator

const calculateSupply = function( age, amountPerDay ){
  const expectedLifespan = 90;
   const yearsRemaining = expectedLifespan - age;
   const amountPerYear = amountPerDay * 365.25;
   const totalSnacksRequired = yearsRemaining * amountPerYear;

   return `You will need ${totalSnacksRequired} to last you until the ripe old age of ${expectedLifespan}.`;
};

const snacks1 = calculateSupply( 80, 5 );
console.log('When you are 80 and need 5 snacks per day: ', snacks1);

//The Geometrizer

// Create 2 functions that calculate properties of a circle.
//
// Create a function called calcCircumference:
//
// Pass the radius to the function.

// Calculate the circumference based on the radius, and return this value from the function (as a number, not a string).
// Call the function with a radius argument of your choice, capture the return value in a variable, and use the variable to print out a string like: "The circumference of the circle is XX."

// Create a function called calcArea:
//
// Pass the radius to the function.
// Calculate the area based on the radius, and return this number from the function.
// Call the function with a radius argument, capture its return value in a variable, and use the variable to output to the consle "The area is NN".

const calcCircumference = function( radius ){
  return 2 * Math.PI * radius;
};

const calculateArea = function( radius ){
  return Math.PI * radius**2;
};

const circumference = calcCircumference( 10 );
console.log(`When the radius is 10, the circumference is ${circumference.toFixed(2)} units.`);

const area = calculateArea( 10 );
console.log(`When the radius is 10, the area is ${area.toFixed(2)} units².`);


// The Temperature Converter
// It's hot out! Let's make a converter.
//
// Create a function called celsiusToFahrenheit which:
//
// Takes a celsius temperature as its argument.
//
// Converts it to fahrenheit and returns this value from the function
//
// Call the funtion this way:
//
// Create a variable called celsius and store a temperature value in it
// Call the celsiusToFahrenheit function and pass the celsius variable as the argument.
// Capture the return value of the function into a new variable, and use both this variable and your original celsius input variable to print out a result like "XX°C is YY°F".
// Now do the reverse calculation by creating a function called fahrenheitToCelsius. Pass a variable called fahrenheit into this function when you call it.
//
// BONUS: prompt the user for the temperatures to convert, instead of hardcoding them into variables.


const celsiusToFahrenheit = function( celsius ){
  return (celsius * 1.8) + 32;
};

const fahrenheitToCelsius = function( fahrenheit ){
  return (fahrenheit - 32) / 1.8;
};

const celsiusTemp = 47;
const fahrenheitTemp = celsiusToFahrenheit( celsiusTemp );
console.log(`${celsiusTemp}°C is equal to ${fahrenheitTemp.toFixed(1)}°F.`);

const newCelsiusTemp = fahrenheitToCelsius( fahrenheitTemp );
console.log(`${ fahrenheitTemp.toFixed(1) }°F is equal to ${ newCelsiusTemp.toFixed(1) }°C.`);
