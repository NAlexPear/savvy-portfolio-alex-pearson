/* eslint-disable no-use-before-define */
var story = {
    "start": {
        "text": "You find yourself suddenly teleported to an interdimensional hub filled with arthropod-like creatures that seem to ignore you. Would you like to travel further into the Hive or make a break for whatever appears to be 'outside'?",
        "choices": [ "hive", "outside" ]
    },
    "hive": {
        "text": "Knowing nothing about arthopodian architecture, you meander aimlessly through corridors innumerable and unspeakably vast. As you near exhaustion, you finally see it: a font of what appears to be water! Would you like to take a drink or keep walking?",
        "choices": [ "walk", "drink", "outside" ]
    },
    "outside": {
        "text": "As you step outside the Hive, a mysterious force field draws back, with the effect of ejecting you violently into space. As you asphyxiate, you recall fondly that scene from Guardians of the Galaxy 2 (no spoilers)",
    },
    "drink": {
        "text": "You take a drink of the mysterious alien liquid and promptly die because it's pretty much poison, duh.",
    },
    "walk": {
        "text": "You walk farther into the hive, but then get eaten, lol."
    }
};

function validateChoice( choice, choices ){
    var isValidChoice = false;

    for( let i = 0; i < choices.length; i++ ){
        if( choice === choices[i] ){
            isValidChoice = true;
        }
    }

    return isValidChoice;
}

function handleChoices( chapter, branch ){
    var choice = prompt( chapter.text );

    if( validateChoice( choice, chapter.choices ) ){
        runStory( choice );
    }
    else{
        runStory( branch );
    }
}

function runStory( branch ){
    var chapter = story[branch];

    if( chapter.choices ){
        handleChoices( chapter, branch );
    }
    else{
        document
            .querySelector( "#output" )
            .textContent = chapter.text;
    }
}

runStory( "start" );
