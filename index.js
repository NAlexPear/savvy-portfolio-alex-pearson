import Content from './src/Content';
import Footer from './src/Footer';
import Header from './src/Header';
import Navigation from './src/Navigation';


var root = document.querySelector('#root');

root.innerHTML = `
  ${Navigation()}
  ${Header('Welcome to my Savvy Coders website!')}
  ${Content()}
  ${Footer()}
`;
