var userName = prompt( "What's your name?" );
var titleElement = document.querySelector( "h1" );
var titleText = titleElement.textContent;

var checkUserName = function checkUserName(){
    if( !userName ){
        userName = prompt( "What's your name for real this time?" );

        checkUserName();
    }
};

checkUserName();

titleElement.textContent = titleText + ", " + userName;
