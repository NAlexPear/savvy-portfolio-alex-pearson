var nameChecker = function nameChecker(){
    var name = prompt('Please enter your name!');

    // Check for a blank name!
    if(name === ''){
        name = prompt('For real, enter your name!');
    }
    else{
        document.querySelector('h1').textContent = `Hello, ${name}`;
    }
};

nameChecker();
