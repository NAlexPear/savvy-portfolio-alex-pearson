var story = {
    "start": {
        "text": "You find yourself suddenly teleported to an interdimensional hub filled with arthropod-like creatures that seem to ignore you. Would you like to travel further into the Hive or make a break for whatever appears to be 'outside'?",
        "choices": [ "hive", "outside" ]
    },
    "hive": {
        "text": "Knowing nothing about arthopodian architecture, you meander aimlessly through corridors innumerable and unspeakably vast. As you near exhaustion, you finally see it: a font of what appears to be water! Would you like to take a drink or keep walking?",
        "choices": [ "walk", "drink" ]
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

var runStory = function runStory( branch ){
    var chapter = story[branch];
    var choices = chapter.choices;
    var choice;

    if( choices ){
        choice = prompt( chapter.text );

        if( choice === choices[0] || choice === choices[1] ){
            runStory( choice );
        }
        else{
            runStory( branch );
        }
    }
    else{
        document
            .querySelector( "#output" )
            .textContent = chapter.text;
    }
};

runStory( "start" );
