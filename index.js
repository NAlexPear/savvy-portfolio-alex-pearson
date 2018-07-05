import Navigation from './components/Navigation';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import * as states from './store';
import Navigo from 'navigo';
import { assign, capitalize } from 'lodash';
import axios from 'axios';


var asyncState = {
    'posts': []
};

var root = document.querySelector('#root');
var router = new Navigo(location.origin);

function handleRoute(params){
    var page = capitalize(params.page);

    startApp(states[page]);
}

function startApp(initialState){
    var state = assign(
        {},
        asyncState,
        initialState
    );

    root.innerHTML = `
      ${Navigation(state)}
      ${Header(state)}
      ${Content(state)}
      ${Footer(state)}
    `;

    router.updatePageLinks();
}

router
    .on(':page', handleRoute)
    .on(() => startApp(states['Home']))
    .resolve();

axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        var params = router.lastRouteResolved().params;

        asyncState.posts = response.data;

        handleRoute(params);
    });
