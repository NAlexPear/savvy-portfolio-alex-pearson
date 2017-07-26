var story = {
    "intro": {
        "prompt": "Welcome to your next adventure! Would you like to go to the woods or onto the airplane? Please type 'woods' or 'airplane'",
        "options": [ "woods", "airplane" ]
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
        "options": [ "cellar", "balcony" ]
    },
    "pass": {
        "prompt": "You wander farther into the woods, promptly get lost, and are never seen or heard from again"
    }
};

var response;

var outputToUser = function outputToUser( choice ){
    document.querySelector( "#output" ).textContent = story[choice].prompt;
};

var responseFromUser = function responseFromUser( choice ){
    response = prompt( story[choice].prompt );
};

var runAdventure = function runAdventure( branch ){
    var options = branch.options;

    responseFromUser( branch );

    if( response === options[0] ){
        responseFromUser( options[0] );
    }
    else if( response === options[1] ){
        outputToUser( options[1] );
    }
    else{
        runAdventure( branch );
    }
};

runAdventure( "intro" );
