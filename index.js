import Navigo from 'navigo';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import * as State from './store';


var root = document.querySelector('#root');
var router = new Navigo(window.location.origin); // returns a router Object

function render(state){
    root.innerHTML = `
        ${Navigation(state[state.active])}
        ${Header(state[state.active])}
        ${Content(state[state.active])}
        ${Footer()}
    `;

    router.updatePageLinks();
}

function handleNavigation(activePage){
    var newState = Object.assign({}, State);

    newState.active = activePage;

    render(newState);
}

router
    .on('/:page', (params) => handleNavigation(params.page))
    .on('/', () => handleNavigation('home'))
    .resolve();
