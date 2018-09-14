import axios from 'axios';
import Navigo from 'navigo';
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import * as State from './store';


var root = document.querySelector('#root');
var router = new Navigo(window.location.origin); // returns a router Object
var newState = Object.assign({}, State);

function render(state){
    root.innerHTML = `
        ${Navigation(state[state.active])}
        ${Header(state[state.active])}
        ${Content(state)}
        ${Footer()}
    `;

    router.updatePageLinks();
}

function handleNavigation(activePage){
    newState.active = activePage;

    render(newState);
}

router
    .on('/:page', (params) => handleNavigation(params.page))
    .on('/', () => handleNavigation('home'))
    .resolve();

axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        newState.posts = response.data;

        render(newState);
    });
