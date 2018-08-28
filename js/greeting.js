var welcomeUser = function welcomeUser(){
    var userName = prompt('What\'s your name?');

    if(userName === ''){
        welcomeUser();
    }
    else{
        alert('Wecome to my portfolio page, ' + userName);
    }
};

welcomeUser();

