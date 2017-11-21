/* globals $ */
var $output = $( "#output" );
var $subtitle = $( "<h2>I'm a subtitle!</h2>" );

$output
    .html( "<h1>hello again, world</h1>" )
    .css( {
        "color": "blue",
        "font-size": "200%",
        "margin-left": "300px"
    } )
    .append( $subtitle )
    .fadeOut( 1000 )
    .fadeIn()
    .animate( {
        "margin-top": "20%"
    }, {
        "duration": "5000",
        "ease": "ease-in",
        "complete": function changeSubtitle(){
            $subtitle.css( "color", "hotpink" );
        }
    } );
