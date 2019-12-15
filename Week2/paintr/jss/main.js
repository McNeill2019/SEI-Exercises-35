//Paintr app

let hue = 0; // our hue increment counter

let lastX = 0; // keep track of the last mouse X position

const createBlob = function( x , y ) {

const $blob = $('<div class= "blob">');

const xVelocity = Math.abs(x - lastX);

const color = `hsla(${ hue }, 100%, 50%, 80%)`;

hue+= 10;

const size = xVelocity;

lastX = x;

  $blob.css({
    top: (y - size/2) + 'px',
    left: (x + size/2) + 'px',
    backgroundColor: color,
    width: size + 'px',
    height: size + 'px',
  });

$('body').append( $blob ); //attach to the DOM.

$blob.animate({
  top: window.innerHeight
}, 1000,
function() {
  blob.remove();
 }
);

}; // end of .on ('click')


$(document).ready( function() {

  console.log('DOM loaded');

  $(document).on('mousemove', function(event){

    //only draw a blob if the shift key was held down
    if( event.shiftKey ) {
    createBlob ( event.clientX, event.clientY );
    }

  }); // end of .on ('click')

  $(document).on('keypress', function(event) {

    if( event.key === ' '){
     $('div.blob').remove();
   }
 });
  //  //  else if ( event.key === '...')
  // }
}); //end of document.ready
