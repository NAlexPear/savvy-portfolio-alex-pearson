const userName = prompt('What is your name?');

const verifyName = function verifyName(){
    if(userName === 'Alex'){
        console.log('Hooray!');
    }
    else{
        console.log('oops');
    }
};

verifyName();
