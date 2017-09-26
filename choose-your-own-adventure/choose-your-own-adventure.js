var story = {
    "start": {
        "prompt": "You find yourself looking over a vast desert, low on water. Would you like to dig for water where you stand, or would you like to search for an oasis? Type 'dig' or 'search', please.",
        "choices": [ "dig", "search" ]
    },
    "dig": {
        "prompt": "You take off one of your shoes to use as a shovel, and promptly burn your toes. It's uncomfortable, and also you run out of water and are never heard from again.",
    },
    "search": {
        "prompt": "You head east for some reason. Then you see a cloud of dust! Would you like to investigate, or turn to the north? Type 'investigate' or 'turn'",
        "choices": [ "investigate", "turn" ]
    },
    "investigate": {
        "prompt": "investigate was called!",
    },
    "turn": {
        "prompt": "turn was called!"
    }
};

/* eslint-disable complexity */
function runStory( node ){
    var branch = story[node];
    var choices = branch.choices;
    var userInput;

    if( !choices ){
        alert( branch.prompt );
    }
    else{
        userInput = prompt( branch.prompt );

        if( userInput === choices[0] || userInput === choices[1] ){
            runStory( userInput );
        }
        else{
            runStory( node );
        }
    }
}

runStory( "start" );
