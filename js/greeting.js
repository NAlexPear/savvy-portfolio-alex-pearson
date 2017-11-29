/* globals $ */

$( "#input" ).on(
    "keyup",
    ( event ) => {
        var value = $( event.target ).val();
        var $subheader = $( "#subheader" );

        $subheader.html( "<h3>Hello " + value + "</h3>" );
    }
);

$( ".content ul" ).on( "mouseover", "li", ( event ) => {
    $( event.target ).css( "background-color", "yellow" );
} );

$( ".content ul" ).on( "mouseout", "li", ( event ) => {
    $( event.target ).css( "background-color", "transparent" );
} );


$( "h1" ).on( "dblclick", ( event ) => event.target.textContent = "I've been clicked!" );
