import axios from 'axios';
import {
    delay,
    styler,
    timeline,
    tween
} from 'popmotion';
import Navigo from 'navigo';
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import * as State from './store';


var animations = {
    'title': timeline([
        {
            'track': 'location',
            'from': {
                'x': 0
            },
            'to': {
                'x': 100
            },
        },
        {
            'track': 'size',
            'from': {
                'color': '#ff0000',
                'fontSize': '200%',
            },
            'to': {
                'color': '#07c4dd',
                'fontSize': '400%',
            },
            'duration': 500
        },
    ]),
    'repos': tween({
        'from': {
            'opacity': 0,
            'scaleY': 0
        },
        'to': {
            'opacity': '1',
            'scaleY': 1
        },
        'duration': 1000
    }),
    'repo': tween({
        'from': {
            'opacity': 0,
            'x': -100
        },
        'to': {
            'opacity': 1,
            'x': 0
        }
    })
};

var root = document.querySelector('#root');
var router = new Navigo(window.location.origin); // returns a router Object
var store;

class Store{
    constructor(state){
        this.state = Object.assign({}, state);
        this.listeners = [];
    }

    addStateListener(listener){
        this.listeners.push(listener);
    }

    dispatch(reducer){
        this.state = reducer(this.state);

        this.listeners.forEach((listener) => listener());
    }

    getState(){
        return this.state;
    }
}

store = new Store(State);

function render(){
    var state = store.getState();
    var repos;

    root.innerHTML = `
        ${Navigation(state[state.active])}
        ${Header(state[state.active])}
        ${Content(state)}
        ${Footer(state)}
    `;

    repos = document.querySelector('#repos');

    if(repos && repos.children.length){
        let repoContainer = styler(repos);
        let repoLinks = Array
            .from(repos.children)
            .map(styler);

        animations
            .repos
            .start({
                'complete': () => repoLinks.forEach((link, idx) => delay(10 * idx).start({
                    'complete': () => animations.repo.start(link.set)
                })),
                'update': repoContainer.set
            });
    }

    document
        .querySelector('h1')
        .addEventListener('click', (event) => {
            var title = styler(event.target);

            animations.title.start((value) => {
                title.set(value.size);
                title.set(value.location);
            });
        });

    router.updatePageLinks();
}

function handleNavigation(activePage){
    store.dispatch((state) => {
        state.active = activePage;

        return state;
    });
}

router
    .on('/:page', (params) => handleNavigation(params.page))
    .on('/', () => handleNavigation('home'))
    .resolve();

axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        store.dispatch((state) => {
            state.posts = response.data;

            return state;
        });
    });

axios
    .get('https://api.openweathermap.org/data/2.5/weather?zip=63108&APPID=8940e272346dc1c7ca592d3e29539351')
    .then((response) => {
        store.dispatch((state) => {
            state.weather = response.data;

            return state;
        });
    });

axios
    .get('https://api.github.com/users/nalexpear/repos', {
        'headers': {
          'Authorization': `token ${process.env.GITHUB_API_KEY}` //eslint-disable-line
        }
    })
    .then((response) => {
        store.dispatch((state) => {
            state.repos = response.data;

            return state;
        });
    });

store.addStateListener(render);
