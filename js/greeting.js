const userName = prompt('What is your name?');
const h1 = document.querySelector('h1');
const title = h1.textContent;

const greetUser = function greetUser(){
    if(userName !== ''){
        h1.textContent = title + ', ' + userName + '!';
    }
};

greetUser();
