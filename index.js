import Navigation from './components/Navigation';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

var home = {
    'title': 'Welcome to my Portfolio'
};

var blog = {
    'title': 'Welcome to my Blog'
};

var root = document.querySelector('#root');


function startApp(state){
    root.innerHTML = `
      ${Navigation(state)}
      ${Header(state)}
      ${Content(state)}
      ${Footer(state)}
    `;

    document
        .querySelector('#navigation a')
        .addEventListener(
            'click',
            (event) => {
                event.preventDefault();

                startApp(blog);
            }
        );
}

startApp(home);
