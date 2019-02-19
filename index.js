import Content from './src/Content';
import Footer from './src/Footer';
import Header from './src/Header';
import Navigation from './src/Navigation';


var originalContent = document.body.innerHTML;

var nameChecker = function nameChecker(){
    var name = prompt('Please enter your name!');

    if(name === ''){
        nameChecker();
    }
    else{
        document.querySelector('h1').textContent = `Hello, ${name}`;
    }
};

document.body.innerHTML = `
  ${Navigation}
  ${Header}
  ${Content}
  ${Footer}
  ${originalContent}
`;

nameChecker();
