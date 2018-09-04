import Navigation from './components/Navigation';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';


var state = {
    'title': 'Welcome to My Portfolio Page'
};

document
    .querySelector('#root')
    .innerHTML = `
      ${Navigation()}
      ${Header(state)}
      ${Content()}
      ${Footer()}
    `;

document
    .querySelector('h1')
    .addEventListener(
        'click',
        (event) => {
            var standard = 'Welcome to My Portfolio Page';
            var funny = 'Welcome to My Schmortfolio Page';

            if(event.target.textContent === standard){
                event.target.textContent = funny;
            }
            else{
                event.target.textContent = standard;
            }
        }
    );
