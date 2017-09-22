var story = {
    "start": "You find yourself looking over a vast desert, low on water. Would you like to dig for water where you stand, or would you like to search for an oasis?"
};

function runStory(){
    var userInput = prompt( story.start );

    if( !userInput ){
        runStory();
    }
    else{
        // user inputs some valid story node
    }
}

runStory();
