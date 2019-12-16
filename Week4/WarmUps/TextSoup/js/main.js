// - Use jQuery to get the contents of the div as a string, then split up the string into an array of words.
// - Use jQuery to 1) create a new DIV with that word as its contents, 2) set the DIV to appear at a random position on the page , and 3) append it to the DOM.

console.log("hello");

$(document).ready(function(){
//makes sure the document is ready when the page loads

  let timerID = null;

  const controls = {
    fadeIn: 2000,
    fadeOut: 2000,
    fontSize: 30,
    wordTimerInterval: 100
  };

  const gui = new dat.GUI();

  gui.add(controls, 'fadeIn', 0, 5000);
  gui.add(controls, 'fadeOut', 0, 5000);
  gui.add(controls, 'fontSize', 10, 200);
  gui.add(controls, 'wordTimerInterval', 1, 1000).onFinishChange(function(newValue){

    window.clearInterval(timerID);
    timerID= window.setInterval( displayWord, newvalue );
  });



  const divContents = $("#book").text().split(/\W+/);

  //create a variable storing the text of div with an ID of book which is also split into just words.


  const randomValue = function(max){
    return Math.floor( Math.random()*max );
  }

  //creates a function with an argument of max. The function returns a random number of a number between 0 and 1 * max.

  const displayWord = function(){
      //creates a master displayWord function that first stores a random Index value (using the random value function) and the length of the div contents.
    const randomIndex = randomValue( divContents.length );
    // console.log( randomIndex );



    const randomWord = divContents[randomIndex];
    //a variable that  holds a random word which is generated from the div contents variable and the random index function.

    const $wordDiv = $('<div class="word">');
    //a jquery variable that holds a div with a class of word.

    $wordDiv.text(randomWord);
  //stores a random word in the jQuery Div with a class of word.



    const xRand = randomValue( window.innerWidth );
    // a variable holding a random value of the windows innerWidth

    const yRand = randomValue( window.innerHeight );
    // a variable holding a random value of the windows innerHeight

    const colorRand = `rgb(${randomValue(255)}, ${randomValue(255)}, ${randomValue(255)} )`;
    // a variable holding a random rgb color value, using the random value function.

    $wordDiv.css({
      top: yRand,
      left: xRand,
      color: colorRand,
      // some extra randomness
      fontSize: `${controls.fontSize}pt`,
      transform: `rotate(${randomValue(360)}deg`,
    })
    // setting the css of the word div to:
    // 1. having a top value of the random x axis.
    // 2.


    $('body').append($wordDiv);

    $wordDiv.fadeIn(controls.fadeIn).fadeOut(controls.fadeOut, function(){
      // remove div from DOM when the fadeout is finished
      $(this).remove();
    })

  }

  setInterval( displayWord, 100 );

})
