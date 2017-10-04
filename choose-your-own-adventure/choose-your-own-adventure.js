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
        "prompt": "As you draw closer, you notice a herd of camels. But where are their riders? Should you approach, or watch from a distance in case of ambush? Type 'approach' or 'wait' to continue",
        "choices": [ "approach", "wait" ]
    },
    "turn": {
        "prompt": "You turn around (uh-oh), and find that Der Komissar's in town (uh-oh!). You continue dancing into the sunset."
    },
    "approach": {
        "prompt": "As you get close, you are trampled by camels. A few of them also spit on you. Should you fight back or run away? Type 'fight' or 'flee' or 'fillibuster'",
        "choices": [ "fight", "flee", "fillibuster" ]
    },
    "fight": {
        "prompt": "You're trampled, duh"
    },
    "flee": {
        "prompt": "Run awaaaay!"
    },
    "fillibuster": {
        "prompt": "You haven't the number of votes required to block this legislation, but you can hold the floor, preventing a vote"
    },
    "wait": {
        "prompt": "What could you possibly be waiting for? It's a desert! You run out of water, thinking of how delicious camel must taste instead of sand."
    }
};

/* eslint-disable complexity */
function runStory( node ){
    var branch = story[node];
    var choices = branch.choices;
    var userInput;
    var isCorrectChoice = false;

    if( !choices ){
        alert( branch.prompt );
    }
    else{
        userInput = prompt( branch.prompt );

        for( let i = 0; !isCorrectChoice && i < choices.length; i++ ){
            isCorrectChoice = userInput === choices[i];
        }

        if( isCorrectChoice ){
            runStory( userInput );
        }
        else{
            runStory( node );
        }
    }
}

runStory( "start" );
