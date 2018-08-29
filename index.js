import Navigation from './components/Navigation';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';


document
    .querySelector('#root')
    .innerHTML = `
      ${Navigation}
      ${Header}
      ${Content}
      ${Footer}
    `;
