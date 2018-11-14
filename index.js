var userName = prompt('What is your name?');

var greet = function greet(){
    if(!userName){
        userName = prompt('What is your name, for real this time?');

        greet();
    }
    else{
        alert('Hello ' + userName);
    }
};

greet();
