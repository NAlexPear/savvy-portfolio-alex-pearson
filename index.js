import Navigation from './components/Navigation';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';


var State = {
    'active': 'home',
    'home': {
        'title': 'Welcome to My Portfolio Page'
    },
    'blog': {
        'title': 'Welcome to My Blog'
    },
    'contact': {
        'title': 'Contact me!'
    },
    'projects': {
        'title': 'Gaze upon my projects, ye mighty, and despair'
    },
};

var root = document.querySelector('#root');

function handleNavigation(event){
    var newState = State;

    newState.active = event.target.textContent;

    event.preventDefault();

    render(newState); // eslint-disable-line
}

function render(state){
    var links;

    root.innerHTML = `
        ${Navigation()}
        ${Header(state[state.active])}
        ${Content()}
        ${Footer()}
    `;

    links = document.querySelectorAll('#navigation a');

    for(let i = 0; i < links.length; i++){
        links[i].addEventListener(
            'click',
            handleNavigation
        );
    }
}

render(State); // kicks off the whole shebang!
