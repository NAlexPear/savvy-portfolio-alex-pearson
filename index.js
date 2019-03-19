import Content from './src/Content';
import Footer from './src/Footer';
import Header from './src/Header';
import Navigation from './src/Navigation';
import Store from './state/store';
import { startCase } from 'lodash';
import axios from 'axios';
import Navigo from 'navigo';

var router = new Navigo(location.origin);
var root = document.querySelector('#root');
var store = new Store();

function render(state){
    root.innerHTML = `
      ${Navigation(state)}
      ${Header(state)}
      ${Content(state)}
      ${Footer(state)}
    `;

    router.updatePageLinks();
}

function handleNavigation(params){
    var destination = startCase(params.page);


    store.dispatch((state) => Object.assign(state, { 'active': destination }));
}

store.addListener(render);

router
    .on('/:page', handleNavigation)
    .on('/', () => handleNavigation({ 'page': 'Home' }))
    .resolve();

axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        store.dispatch((state) => Object.assign(state, {
            'posts': response.data
        }));
    });
