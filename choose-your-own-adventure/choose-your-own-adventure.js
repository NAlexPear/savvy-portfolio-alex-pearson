var story = {
    "start": "You find yourself looking over a vast desert, low on water. Would you like to dig for water where you stand, or would you like to search for an oasis? Type 'dig' or 'search', please.",
    "dig": "You take off one of your shoes to use as a shovel, and promptly burn your toes. It's uncomfortable, and also you run out of water and are never heard from again.",
    "search": "You head east for some reason. Then you see a cloud of dust! Would you like to investigate, or turn to the north? Type 'investigate' or 'turn'",
    "investigate": "investigate was called!",
    "turn": "turn was called!"
};

/* eslint-disable complexity */
function runStory( node ){
    var userInput = prompt( story[node] );

    if( userInput === "dig" ){
        alert( story.dig );
    }
    else if( userInput === "search" ){
        userInput = prompt( story.search );

        if( userInput === "investigate" ){
            alert( story.investigate );
        }
        else if( userInput === "turn" ){
            alert( story.turn );
        }
        else{
            runStory();
        }
    }
    else{
        runStory( node );
    }
}

runStory( "start" );
