var story = {
    "intro": {
        "prompt": "Welcome to your next adventure! Would you like to go to the woods or onto the airplane? Please type 'woods' or 'airplane'",
        "options": [ "woods", "airplane", "pass", "balcony" ]
    },
    "woods": {
        "prompt": "You march resolutely into the forbidding forest, confident in your survival skills and general daring-do. As you wander, you come across a castle. Do you enter, or pass on your way? Please type 'enter' or 'pass'",
        "options": [ "enter", "pass" ]
    },
    "airplane": {
        "prompt": "You fly off into the sunset (well, not actually INTO the sunset, because then the plane would burn up), and live happily ever after or something."
    },
    "enter": {
        "prompt": "You see a dark cellar and a bright balcony. Which should you explore first? Type 'cellar' or 'balcony'",
        "options": [ "cellar", "balcony", "intro" ]
    },
    "pass": {
        "prompt": "You wander farther into the woods, promptly get lost, and are never seen or heard from again"
    },
    "cellar": {
        "prompt": "Obviously the cellar is where wayward travelers go do die"
    },
    "balcony": {
        "prompt": "There's no forest OSHA, so you walk out on the balcony just as it collapses into a ravine. You're probably fine, but that's for another story."
    }
};

var matchesOption = false;
var response;

var outputToUser = function outputToUser( choice ){
    document.querySelector( "#output" ).textContent = story[choice].prompt;
};

var responseFromUser = function responseFromUser( branch ){
    response = prompt( branch.prompt );
};

var evaluateOptions = function evaluateOptions( options ){
    var i = 0;

    while( i < options.length ){
        if( response === options[i] ){
            matchesOption = true;
        }

        i++;
    }
};

var responseFromOptions = function responseFromOptions( options, choice ){
    evaluateOptions( options );
    
    if( !matchesOption ){
        response = choice;
    }
};

var runAdventure = function runAdventure( choice ){
    var branch = story[choice];
    var options = branch.options;

    if( options ){
        responseFromUser( branch );
        responseFromOptions( options, choice );
        runAdventure( response );
    }
    else{
        outputToUser( choice );
    }
};

runAdventure( "intro" );
