import Navigation from './components/Navigation';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import * as State from './store';


var root = document.querySelector('#root');

function handleNavigation(event){
    var newState = Object.assign({}, State);

    newState.active = event.target.textContent;

    event.preventDefault();

    render(newState); // eslint-disable-line
}

function render(state){
    var links;

    root.innerHTML = `
        ${Navigation(state[state.active])}
        ${Header(state[state.active])}
        ${Content(state[state.active])}
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
