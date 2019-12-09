/* Warmup - Raindrops

Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and output the following:

If the number contains 3 as a factor, output 'Pling'.
If the number contains 5 as a factor, output 'Plang'.
If the number contains 7 as a factor, output 'Plong'.
If the number does not contain 3, 5, or 7 as a factor, output the number as a string.

Examples:

28 has 7 as a factor.
In raindrop-speak, this would be a simple "Plong".
1755 has 3 and 5 as factors.
In raindrop-speak, this would be a "PlingPlang".
34 has neither 3, 5 nor 7 as a factor.
Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".
*/

// Solution:

const raindrops = function (num) {

  let string = ' ';

  if (num % 3 === 0) {
      //string += pling
      string = string + 'pling';
  }

  if (num % 5 === 0) {
        //string += plang
      string = string + 'Plang';
  }

  if (num % 7 === 0) {
        //string += pling
        string = string + 'Plong';
  }

  if (string.length === 0) {
        //string += pling
        string = num.toString()
  }

  return string;
};

console.log (raindrops(1755));
console.log (raindrops(28));
console.log (raindrops(34));
