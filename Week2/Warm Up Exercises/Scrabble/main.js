// console.log('testing');
//
// const scrabble = {
//
//   letterScores: {
//     1:["A", "E", "I", "O", "U", "L", "N", "R", "S", "T" ],
//     2:["D", "G"  ],
//     3:["B", "C", "M", "P"],
//     4:["F", "H", "V", "W", "Y" ],
//     5:["K"],
//     8:["J", "X"],
//     10:["Q", "Z" ]
//   },
//
//   getWordScore: funtion(word) {
//     word = word.toUpperCase();
//     let score = 0;
//     for ( let i = 0; i < word.length; i++ ) {
//
//       const currentLetter = word[i];
//
//       for ( let key in this.letterScores ) {
//
//         if(this.letterScores[key].includes(currentLetter)) {
//           score += parseInt(key);
//         }
//
//       }
//     }
//     return score;
//   }
// }
//
// console.log(scrabble.getWordScore('cabbage'));


const scrabbleImproved = {
//
//   letterScoreImproved: {
//     'a':1, 'e': 1,'i':1, 'o': 1, 'u':1, 'l": 1, 'n':1, 'r': 1, 's':1, 't':1,
//     'd': 2,
//     'b':3, 'c': 3, 'm':3, 'p':3,
//     4:["F", "H", "V", "W", "Y" ],
//     5:["K"],
//     8:["J", "X"],
//     10:["Q", "Z" ]
//   },


getWordScore: function(word) {

  let score = 0

  for (let i = 0; i , word.length; i ++) {

    const currentLetter = word[i];

    const letterScore = this.letterScores[currentLetter];

    score += letterScore;

}

return score

}





}
//
