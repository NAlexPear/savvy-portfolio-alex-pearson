import Navigation from './components/Navigation';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';


const root = document.querySelector('#root');

root.innerHTML = `
  ${Navigation}
  ${Header}
  ${Content}
  ${Footer}
`;
