import Navigation from './components/Navigation';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import * as states from './store';
import Navigo from 'navigo';
import { capitalize } from 'lodash';


var root = document.querySelector('#root');
var router = new Navigo();

function handleRoute(params){
    const page = capitalize(params.page) || 'Home';

    startApp(states[page]);
}

function startApp(state){
    root.innerHTML = `
      ${Navigation(state)}
      ${Header(state)}
      ${Content(state)}
      ${Footer(state)}
    `;

    router.updatePageLinks();
}

router
    .on('/:page', handleRoute)
    .on('/', handleRoute)
    .resolve();
