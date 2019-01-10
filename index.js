import Content from './src/Content';
import Footer from './src/Footer';
import greet from './src/Greeting';
import Header from './src/Header';
import Navigation from './src/Navigation';
import Navigo from 'navigo';
import Store from './src/Store';
import { html, render } from 'lit-html';


var router = new Navigo(window.location.origin);

var root = document.querySelector('#root');

var State = {
    'posts': [],
    'active': 'home',
    'home': {
        'title': 'Welcome to my Savvy Coders Portfolio Project',
        'links': [ 'blog', 'contact', 'projects' ]
    },
    'blog': {
        'title': 'Please read my insightful Blog',
        'links': [ 'home', 'contact', 'projects' ]
    },
    'contact': {
        'title': 'Contact Me',
        'links': [ 'home', 'blog', 'projects' ]
    },
    'projects': {
        'title': 'Look upon my works, ye mighty, and despair',
        'links': [ 'home', 'blog', 'contact' ]
    }
};


var store = new Store(State);

function handleNavigation(params){
    store.dispatch((state) => {
        state.active = params.page;

        return state;
    });
}

function App(state){
    return html`
       ${Navigation(state)}
       ${Header(state)}
       ${Content(state)}
       ${Footer(state)}
    `;
}

function start(state){
    render(App(state), root);
}

store.addListener(start);
store.addListener(() => router.updatePageLinks());

router
    .on('/:page', handleNavigation)
    .on('/', () => handleNavigation({ 'page': 'home' }))
    .resolve();

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((posts) => store.dispatch((state) => {
        state.posts = posts;

        return state;
    }));


