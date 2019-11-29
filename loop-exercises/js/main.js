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

/*let status = 'odd';

for (let i = 0; i < 20; i += 1) {

  if( i % 2 === 0 ) {
  status = 'even';
  }
}

console.log(`${i} is ${status}`);*/

//Multiplication Tables

/*Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).*/


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

/*Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.
*/

//The Grade Assigner

/*Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.
*/


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

//Array exercises

/*Create an array to hold your top five choices of something (colors, presidents, whatever). If you choose movies, the right top choice is "Satantango".

For each choice, log to the screen a string like: "My #1 choice is blue."
Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number.*/


const sports = ["tennis", "football", "badminton","rugby","cycling"];

for (var i = 0; i < sports.length; i++) {

  let suffix = '';
  if( i === 0 ){
    suffix = 'st';
  } else if (i===1){
    suffix = 'nd';
  } else if (i ===2){
    suffix = 'rd'
  } else {
    suffix ='th'
  }

  // let number = [i + 1];
  // sports[i];
  console.log(`My ${i+1}${suffix} choice is ${sports[i]}`)

}
