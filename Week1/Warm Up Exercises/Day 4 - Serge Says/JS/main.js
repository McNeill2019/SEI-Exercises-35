// Warm Up Day 3 exercise

// /Serge Says
//
// Examples
//
// Serge answers 'Sure.' if you ask him a question.
//
// He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
//
// He says 'Fine. Be that way!' if you address him without actually saying anything.
//
// He answers 'Whatever.' to anything else.
//
// Create a function that takes an input and returns Serge's response.
// */


const response = function(input) {

if (input.endsWith('?')) {
  return 'Sure';
} else if (input.length === 0) {
 return 'fine be that way';
} else if (input === input.toUpperCase()) {
 return 'woah, chill out!';
} else {
 return "whatever";
}
};

console.log(response("How are You?"));
console.log(response("HOW ARE YOU!"));
console.log(response(""));
console.log(response("Hey"));
