/* globals $ */
/* eslint-disable no-console */

var $ol = $( "ol" );

function clickHandler(){
    $( this ).text( "I just got clicked!" );

    $ol.off( "click", clickHandler );
}

$ol.on( "click", "li", clickHandler );
