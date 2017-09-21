var userInput = prompt( "What is your name?" );

if( !userInput ){
    userInput = prompt( "What's your name, for reals this time?" );
}

alert( "Hello, " + userInput );
