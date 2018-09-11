import Navigation from './components/Navigation';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';


var State = {
    'active': 'home',
    'home': {
        'links': [ 'blog', 'contact', 'projects' ],
        'title': 'Welcome to My Portfolio Page'
    },
    'blog': {
        'links': [ 'home', 'contact', 'projects' ],
        'title': 'Welcome to My Blog'
    },
    'contact': {
        'links': [ 'home', 'blog', 'projects' ],
        'title': 'Contact me!'
    },
    'projects': {
        'links': [ 'home' ],
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
        ${Navigation(state[state.active])}
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
