import Content from './src/Content';
import Footer from './src/Footer';
import Header from './src/Header';
import Navigation from './src/Navigation';


var State = {
    'Home': {
        'title': 'Welcome to Alex\'s Savvy Coder Website'
    },
    'Blog': {
        'title': 'Read my words and stuff'
    },
    'Contact': {
        'title': 'Contact Alex'
    },
    'Projects': {
        'title': 'Behold my works, ye mighty, and despair'
    }
};

var root = document.querySelector('#root');

function render(state){
    var links;

    root.innerHTML = `
      ${Navigation(state)}
      ${Header(state.title)}
      ${Content(state)}
      ${Footer(state)}
    `;

    links = document.querySelectorAll('#navigation > ul > li > a');

    links[0].addEventListener('click', (event) => {
        event.preventDefault();

        render(State.Blog);
    });

    links[1].addEventListener('click', (event) => {
        event.preventDefault();

        render(State.Contact);
    });

    links[2].addEventListener('click', (event) => {
        event.preventDefault();

        render(State.Projects);
    });
}

render(State.Home);
