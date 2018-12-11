import { capitalize } from 'lodash';


function buildLinks(links){
    var list = '';
    var link = '';

    for(let i = 0; i < links.length; i++){
        if(links[i] !== 'home'){
            link = links[i];
        }

        list += `
          <li>
              <a href="/${link}" data-navigo>
                ${capitalize(links[i])}
              </a>
          </li>
        `;
    }

    return list;
}

export default function Navigation(state){
    return `
      <div id="navigation">
        <ul class="container">
          ${buildLinks(state[state.active].links)}
        </ul>
      </div>
    `;
}
