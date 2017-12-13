/* eslint-disable complexity, no-console */
function generateEvenListItems(){
    var evens = document.querySelector( "#evens" );
    var listItemString = "";

    for( var i = 2; i <= 20; i += 2 ){
        listItemString += "<li>";
        listItemString += i;
        listItemString += "</li>";
    }

    evens.innerHTML = listItemString;
}

var fizzBuzzResult = "";

function fizzBuzz( num ){
    if( num % 15 === 0 ){
        fizzBuzzResult += ", FizzBuzz";
    }
    else if( num % 3 === 0 ){
        fizzBuzzResult += ", Fizz";
    }
    else if( num % 5 === 0 ){
        fizzBuzzResult += ", Buzz";
    }
    else if( num === 1 ){
        fizzBuzzResult += num;
    }
    else{
        fizzBuzzResult += ", " + num;
    }
}

function fizzBuzzLightyear( limit ){
    for( var i = 1; i <= limit; i++ ){
        fizzBuzz( i );
    }
}

function makeListItems(){
    var listItems = document.querySelectorAll( "li" );
    var listArray = Array.from( listItems );

    for( var i = 0; i < listArray.length; i++ ){
        listArray[i].textContent = i + 1;
    }
}

fizzBuzzLightyear( 50 );
makeListItems();
generateEvenListItems();

document
    .querySelector( "#fizzbuzz" )
    .textContent = fizzBuzzResult;
