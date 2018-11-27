import Content from './src/Content';
import Footer from './src/Footer';
import greet from './src/Greeting';
import Header from './src/Header';
import Navigation from './src/Navigation';


document.querySelector('#root').innerHTML = `
    ${Navigation}
    ${Header}
    ${Content}
    ${Footer}
`;

greet();
