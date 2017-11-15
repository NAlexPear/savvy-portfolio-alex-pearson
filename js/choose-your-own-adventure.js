var story = {
    "start": "You find yourself suddenly teleported to an interdimensional hub filled with arthropod-like creatures that seem to ignore you. Would you like to travel further into the Hive or make a break for whatever appears to be 'outside'?",
    "hive": "Knowing nothing about arthopodian architecture, you meander aimlessly through corridors innumerable and unspeakably vast. As you near exhaustion, you finally see it: a font of what appears to be water! Would you like to take a drink or keep walking?",
    "outside": "As you step outside the Hive, a mysterious force field draws back, with the effect of ejecting you violently into space. As you asphyxiate, you recall fondly that scene from Guardians of the Galaxy 2 (no spoilers)",
    "drink": "You take a drink of the mysterious alien liquid and promptly die because it's pretty much poison, duh.",
    "walk": "You walk farther into the hive, but then get eaten, lol."
};

var runStory = function runStory(){
    var choice = prompt( story.start );

    if( choice === "hive" ){
        choice = prompt( story[choice] );

        if( choice === "drink" ){
            document
                .querySelector( "#output" )
                .textContent = story[choice];
        }
        else if( choice === "walk" ){
            document
                .querySelector( "#output" )
                .textContent = story[choice];
        }
        else{
            // handle bad input
        }
    }
    else if( choice === "outside" ){
        document
            .querySelector( "#output" )
            .textContent = story[choice];
    }
    else{
        runStory();
    }
};

runStory();
