//Loop exercises

//The even/odd reporter

/*instructions
Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
*/

for (let i = 0; i < 20; i += 1 ) {

  if (i%2 === 0) {
  console.log(`${i} is even`);
} else {
  console.log(`${i} is odd`);
  }

} //closing bracket of for loop.

//Alternative way

// /*let status = 'odd';
//
// for (let i = 0; i < 20; i += 1) {
//
//   if( i % 2 === 0 ) {
//   status = 'even';
//   }
// }

console.log(`${i} is ${status}`);*/

//Multiplication Tables

// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
//
// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).


for (let i = 0; i < 10; i +=1 ) {
  const number = i * 9;
  console.log(`${i} * 9 = ${number}`);
}

for(let i = 0; i < 10; i +=1) {
  console.log(`Outer loop! Value of i is: ${i}`)
  for (let j =0; j< 10; j +=1) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}


//The Grade Assigner

// original question:
// Write a function named assignGrade that:
//
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F" (for example, scores above 90 receive an "A", scores between 90 and 80 receive a "B", and so on).
// Call that function for a few different scores and log the result to make sure it works.


const assignGrade = function (score) {
     if ( score > 90) {
      return ('A');
    } else if (score >= 80) {
      return ('B');
    } else if (score >= 70) {
      return ('C');
    } else if (score >= 60) {
      return ('D');
    } else {
      return ('E');
     }
   };

//loops through all grades and refers to score in assigngrade function and returns a grade for each score.

  for( let i = 0; i < 100; i+=1){
    const grade = assignGrade ( i );
    console.log(`The grade for ${i} is ${grade}.`)
  }
