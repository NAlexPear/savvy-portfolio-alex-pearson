export default function nameChecker(){
    var name = prompt('Please enter your name!');

    if(name === ''){
        nameChecker();
    }
    else{
        document.querySelector('h1').textContent = `Hello, ${name}`;
    }
}
