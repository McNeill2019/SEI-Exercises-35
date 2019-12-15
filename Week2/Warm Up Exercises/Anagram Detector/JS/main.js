// console.log('hello');
//
// const wordArray =  ["enlists","google","inlets","banana"]
//
// const anagram = []
//
// //check is the word characters are contained in the array.
// const wordMatch = function (wordInput, wordArray) {
//   wordInputCheck = wordInput.split().sort().join()
//   for (var i = 0; i < word.length; i++) {
//     word = word[i];
//     wordArray = word.split("").sort().join();
//     if word.includes(wordInput);
//     wordInput += wordMatch;
//   }
//
// //check the words to see if it contains the exact characters?
//
//   const checkForCharacters = function (wordMatch) {
//     if (wordMatch === 0) {
//       return wordMatch;
//     } if
//
//   }


//split - creates array of individual letters from the string.//

//.sort() - sorts the letters alphabetically.

//.join() - join it back to a full word



const anagramDetector = {

  anagram: [],

  customSort: function( unsortedWord ) {
    return unsortedWord.toLowerCase().split("").sort().join("")
  },

  findMatch: function( word, array ) {

    let wordOne = this.customSort(word);

    for (let i=0; i < array.length; i++) {

      let wordTwo = this.customSort( array[i]);

      if ( wordOne === wordTwo ) {

        this.anagram.push(array[i]);
      };
    }

    return `The anagram of ${word} is ${this.anagram}`
  },
}

console.log (anagramDetector.findMatch("listen", ["enlists","google","inlets","banana"]));
