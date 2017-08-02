/* globals $ */
var colors = {
    "title": "green",
    "list": "blue"
};

var titleAnimation = {
    "font-size": "250%"
};

var chooseLiColor = function chooseLiColor(){
    colors.list = prompt( "What color would you like to use for the list items?" ) || colors.list;

    $( "li" ).css( "color", colors.list );
};

colors.title = prompt( "What color would you like to use for the title?" ) || colors.title;

$( "h1" )
    .animate( titleAnimation, 2000, chooseLiColor )
    .css( "color", colors.title );
