import Content from './src/Content';
import Footer from './src/Footer';
import greet from './src/Greeting';
import Header from './src/Header';
import Navigation from './src/Navigation';

var state = {
    'title': 'Welcome to my Savvy Coders Portfolio Project'
};

document.querySelector('#root').innerHTML = `
    ${Navigation(state)}
    ${Header(state)}
    ${Content(state)}
    ${Footer(state)}
`;

greet();
