// onload
window.onload = function() {
    alert( "welcome" );
};


// when dom get fully loaded
$( document ).ready(function() {
    $( "a" ).click(function( event ) {
        alert( "Thanks for visiting!" );
    });

    $( "a.a" ).click(function( event ) {
        alert( "The link will no longer take you to jquery.com" );
        event.preventDefault(); //prevent the default behavior 
    });

    $( "a" ).addClass( "test" );
    $( "a" ).removeClass( "test" );

    $( 'button' ).click(function( event ) {
        $( this ).hide( "slow" );
    });
});

$(function() {
    $( "p" ).text( "The DOM is now loaded and can be manipulated." );
  });