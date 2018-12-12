import { capitalize } from 'lodash';


function buildLink(link){
    var href = '';

    if(link !== 'home'){
        href = link;
    }

    return `
      <li>
          <a href="/${href}" data-navigo>
            ${capitalize(link)}
          </a>
      </li>
    `;
}

export default function Navigation(state){
    return `
      <div id="navigation">
        <ul class="container">
          ${state[state.active].links.map(buildLink).join('')}
        </ul>
      </div>
    `;
}
