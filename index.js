import Navigation from './components/Navigation';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import * as states from './store';


var root = document.querySelector('#root');

function handleNavigation(event){
    var page = event.target.textContent;

    event.preventDefault();

    startApp(states[page]);
}

function startApp(state){
    var i = 0;
    var links;

    root.innerHTML = `
      ${Navigation(state)}
      ${Header(state)}
      ${Content(state)}
      ${Footer(state)}
    `;

    links = document.querySelectorAll('#navigation a');

    while(i < links.length){
        links[i].addEventListener(
            'click',
            handleNavigation
        );

        i++;
    }
}

startApp(states['Home']);
