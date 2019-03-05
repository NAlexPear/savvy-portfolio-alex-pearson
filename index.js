import Content from './src/Content';
import Footer from './src/Footer';
import Header from './src/Header';
import Navigation from './src/Navigation';
import { Blog, Contact, Home, Projects } from './state';
import { startCase } from 'lodash';

var State = {
    'Home': Home,
    'Blog': Blog,
    'Contact': Contact,
    'Projects': Projects
};

var root = document.querySelector('#root');

function handleNavigation(event){
    var destination = startCase(event.target.textContent);

    event.preventDefault();

    render(State[destination]); // eslint-disable-line
}

function render(state){
    var i = 0;
    var links;

    root.innerHTML = `
      ${Navigation(state)}
      ${Header(state.title)}
      ${Content(state)}
      ${Footer(state)}
    `;

    links = document.querySelectorAll('#navigation > ul > li > a');

    while(i < links.length){
        links[i].addEventListener('click', handleNavigation);

        i++;
    }
}

render(State.Home);
