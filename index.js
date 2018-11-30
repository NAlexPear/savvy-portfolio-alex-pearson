import Content from './src/Content';
import Footer from './src/Footer';
import greet from './src/Greeting';
import Header from './src/Header';
import Navigation from './src/Navigation';


var State = {
    'active': 'home',
    'home': {
        'title': 'Welcome to my Savvy Coders Portfolio Project',
    },
    'blog': {
        'title': 'Please read my insightful Blog'
    },
    'contact': {
        'title': 'Contact Me'
    },
    'projects': {
        'title': 'Look upon my works, ye mighty, and despair'
    }
};

var root = document.querySelector('#root');

function handleNavigation(event){
    event.preventDefault();

    State.active = event.target.textContent;

    render(State); // eslint-disable-line
}

function render(state){
    var links;

    root.innerHTML = `
      ${Navigation(state)}
      ${Header(state)}
      ${Content(state)}
      ${Footer(state)}
  `;

    greet();

    links = document.querySelectorAll('#navigation a');

    links[0].addEventListener(
        'click',
        handleNavigation
    );

    links[1].addEventListener(
        'click',
        handleNavigation
    );

    links[2].addEventListener(
        'click',
        handleNavigation
    );
}

render(State);
