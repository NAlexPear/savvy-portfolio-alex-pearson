const h1 = document.querySelector('h1');
const title = h1.textContent;

const greetUser = function greetUser(){
    const userName = prompt('What is your name?');

    if(userName){
        h1.innerHTML = `
          ${title},
          <span class="excited">
            ${userName}
          </span>!
        `;
    }
    else{
        greetUser();
    }
};

greetUser();
