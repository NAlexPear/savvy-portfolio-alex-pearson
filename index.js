import Navigation from './components/Navigation';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';


const root = document.querySelector('#root');

const state = {
    'title': 'Welcome to my Savvy Coders Website'
};

root.innerHTML = `
    ${Navigation(state)}
    ${Header(state)}
    ${Content(state)}
    ${Footer(state)}
  `;

document
    .querySelector('li > a')
    .addEventListener('click', (event) => event.preventDefault());
