import axios from 'axios';
import Navigo from 'navigo';
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import * as State from './store';


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

    root.innerHTML = `
        ${Navigation(state[state.active])}
        ${Header(state[state.active])}
        ${Content(state)}
        ${Footer(state)}
    `;

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
    .get('http://api.openweathermap.org/data/2.5/weather?zip=63108&APPID=8940e272346dc1c7ca592d3e29539351')
    .then((response) => {
        store.dispatch((state) => {
            state.weather = response.data;

            return state;
        });
    });

store.addStateListener(render);
