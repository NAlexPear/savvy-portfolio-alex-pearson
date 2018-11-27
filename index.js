import Content from './src/Content';
import Footer from './src/Footer';
import Header from './src/Header';
import Navigation from './src/Navigation';


document.querySelector('#root').innerHTML = `
    ${Navigation}
    ${Header}
    ${Content}
    ${Footer}
`;

// var title = document.querySelector('h1');

// var greet = function greet(){
//     if(!userName){
//         userName = prompt('What is your name, for real this time?');

//         greet();
//     }
//     else{
//         title.innerHTML += `, <em>${userName}</em>`;
//     }
// };

// var userName = prompt('What is your name?');
// greet();
