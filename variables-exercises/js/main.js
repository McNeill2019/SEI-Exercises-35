
console.log('Hello World!');

//The Fortune Teller

const numberOfChildren = 2;
const partnersName = "lisa";
const geographicLocation = "Clovelly";
const jobTitle = "Front End Developer";

const output = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnersName} with ${numberOfChildren} kids.`

console.log (output);

//The Age Calculator

const currentYear = 2019;
const birthYear = 1983;

const age = (currentYear - birthYear);
const age2 = (age - 1);

const output2 = `They are either ${age} or ${age2} years old`

console.log (output2);

//The Lifetime Supply Calculator

const currentAge = 36;
const maximumAge = 100;
const estimatedAmountPerDay = 2;

const yearRemaining = maximumAge - currentAge;
const yearlySupply = estimatedAmountPerDay * 365;
const totalSnacks = yearlySupply * yearRemaining;

console.log (`You will need ${totalSnacks} bars to last you until the ripe old age of ${maximumAge}`);

//Calculate radius

const radius = 3;

const circ = 2 * Math.PI * radius;
const area = Math.PI * radius**2;

console.log ("The circumference is " + circ);
console.log ("The area is " + area);

//The Temperature Converter

let tempInCelcius = 35;
let farenheit = tempInCelcius * 1.8 + 32;

console.log (tempInCelcius + " degrees celsius is " + farenheit + " degrees farenheit");

farenheit = 116;
const celsius = (farenheit - 32) * 5 / 9;

console.log (`${farenheit} degrees farenheit is ${celsius.toFixed(2)} degrees celsius`);
