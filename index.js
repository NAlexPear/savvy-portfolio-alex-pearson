import Content from './src/Content';
import Footer from './src/Footer';
import Header from './src/Header';
import Navigation from './src/Navigation';
import nameChecker from './src/Greeter';


var originalContent = document.body.innerHTML;

document.body.innerHTML = `
  ${Navigation}
  ${Header}
  ${Content}
  ${Footer}
  ${originalContent}
`;

nameChecker();
