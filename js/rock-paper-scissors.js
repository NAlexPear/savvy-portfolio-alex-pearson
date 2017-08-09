/* eslint-disable no-unused-vars */
function generateComputerChoice( num ){
    var choice = "scissors";

    if( num <= 0.33 ){
        choice = "rock";
    }
    else if( num >= 0.66 ){
        choice = "paper";
    }

    return choice;
}

function checkForComputerWin( user, computer ){
    var rockPaper = user === "rock" && computer === "paper";
    var paperScissors = user === "paper" && computer === "scissors";
    var scissorsRock = user === "scissors" && computer === "rock";

    return rockPaper || paperScissors || scissorsRock;
}

function compareChoices( user, computer ){
    var result = "user wins!";

    // compare the choices
    if( user === computer ){
        result = "it's a tie!";
    }
    else if( checkForComputerWin( user, computer ) ){
        result = "computer wins!";
    }

    return result;
}

function playRockPaperScissors( event ){
    var random = Math.random();
    var computer = generateComputerChoice( random );
    var result = compareChoices( event.target.textContent, computer );

    document.querySelector( "#output" ).textContent = result;
}

$( "button" ).on( "click", playRockPaperScissors );
