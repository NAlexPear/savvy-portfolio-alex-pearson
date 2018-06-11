import Navigation from './components/Navigation';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

var STATE = {
    'Home': {
        'links': [
            'Blog',
            'Contact',
            'Projects'
        ],
        'title': 'Welcome to my Portfolio'
    },
    'Blog': {
        'links': [
            'Home',
            'Contact',
            'Projects'
        ],
        'title': 'Welcome to my Blog'
    },
    'Contact': {
        'links': [
            'Home',
            'Blog',
            'Projects'
        ],
        'title': 'Contact Me'
    },
    'Projects': {
        'links': [
            'Home',
            'Blog',
            'Contact'
        ],
        'title': 'Check out some of my projects'
    }
};

var root = document.querySelector('#root');

function handleNavigation(event){
    var page = event.target.textContent;

    event.preventDefault();

    startApp(STATE[page]);
}

function startApp(state){
    var i = 0;
    var links;

    root.innerHTML = `
      ${Navigation(state)}
      ${Header(state)}
      ${Content(state)}
      ${Footer(state)}
    `;

    links = document.querySelectorAll('#navigation a');

    while(i < links.length){
        links[i].addEventListener(
            'click',
            handleNavigation
        );

        i++;
    }
}

startApp(STATE['Home']);
