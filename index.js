import Content from './src/Content';
import Footer from './src/Footer';
import Header from './src/Header';
import Navigation from './src/Navigation';
import { startCase } from 'lodash';

var State = {
    'Home': {
        'title': 'Welcome to Alex\'s Savvy Coder Website'
    },
    'Blog': {
        'title': 'Read my words and stuff'
    },
    'Contact': {
        'title': 'Contact Alex'
    },
    'Projects': {
        'title': 'Behold my works, ye mighty, and despair'
    }
};

var root = document.querySelector('#root');

function handleNavigation(event){
    var destination = startCase(event.target.textContent);

    event.preventDefault();

    render(State[destination]); // eslint-disable-line
}

function render(state){
    var i = 0;
    var links;

    root.innerHTML = `
      ${Navigation(state)}
      ${Header(state.title)}
      ${Content(state)}
      ${Footer(state)}
    `;

    links = document.querySelectorAll('#navigation > ul > li > a');

    while(i < links.length){
        links[i].addEventListener('click', handleNavigation);

        i++;
    }
}

render(State.Home);
