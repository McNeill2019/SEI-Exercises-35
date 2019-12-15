// Badger's Revenge

// The names of those who are witnessed clapping Badger more than twice in the first four days of any one week will go into a draw. On Friday morning, a random name will be drawn from that list and the 'winner' will be forced to deliver the solution to Friday's warmup.
//

// Create a program that Badger can use for this task - ideally, you should create an object (revengeOfBadger) to do this, but if you can get it working using standalone functions, that's cool.
//

// Your program should:
//
// Track how many times each student in the class has clapped this week (just make up the numbers);

// Include a collection of candidates for the Friday draw (ie, a list of names of people who have clapped Badger more than twice that week);

// Pick a random student to deliver the solution to Friday's warmup.

// If no one has clapped enough that week, the program should indicate that Badger has to do his own damned warmup.


// let revengeOfBadger = {
//   studentOne: [1,0,1,1,0],
//   studentTwo:[1,0,0,0,6],
//   studentThree:[1,2,3,0,1],
//   studentFour:[1,0,0,0,0],
//   studentFive:[1,0,1,0,0],
//   studentSix:[0,1,0,0,0],
//   studentSeven:[1,0,0,0,0],
//   studentEight:[0,0,0,0,0],
//   studentNine:[0,0,0,0,0],
//   studentTen:[1,0,1,0,0],
//   studentEleven:[0,1,0,0,0],
//   studentTwelve:[1,0,0,1,0],
// };
//
// //add up first four days for a candidate
//
// const addUpFirstFourDays = function (student) {
//   let total = 0
//   // for (let i = 0; i < revengeOfBadger[student.length]- 1; i++) {
//     for (let i = 0; i < 4; i++) {
//       // console.log(student[i]);
//     total = total + student[i];
//     // console.log(total);
//   }
//   return total;
// }
//
// for (key in revengeOfBadger) {
//   //total = total + addUpFirstFourDays(revengeOfBadger[key])
// revengeOfBadger[key]= addUpFirstFourDays(revengeOfBadger[key])
// }
// console.log(revengeOfBadger);
//
// //console.log(addUpFirstFourDays(revengeOfBadger.studentOne));

//solution:

const revengeOfBadger = {

   students: {

     chris: 4,
     scott: 5,
     lily: 0,
     anna: 1,
     Donny: 3,
  },

  // Object with an empty array/ The shortlist will be pushed up in to this array.
  shortlist: [],

  //method function which works out a shortlist
  generateShortlist: function() {
    for (const key in this.students) { //says to look up the key inside the students object and loop through each.
      const numClaps = this.students[key]; //This stores the key and values of each person in students.

      if(numClaps > 2) { //if the number of claps of the person in the variable numClaps is greater than 2.

        this.shortlist.push(key) //  push the key to the shortlist array.
      }
    }

  },//end generate shortlist


  drawWinner: function(){  //method with a function that draws a winner

    this.generateShortlist(); //calls the generate shortlist function

    if(this.shortlist.length > 0) { // if the shortlist array is greater than 0

      const randomIndex = math.floor(Math.random() * this.shortlist.length ); //creates a random number under 1 and multiplies it by the length of the shortlist array.

      return this.shortlist[randomIndex]; //returns the shortlist array ???

    } else {
      return 'badger';
    }
  }
} // end of revenge of badger //

console.log(revengeOfBadger.drawWinner());
