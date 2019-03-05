import { lowerCase } from 'lodash';

function buildLinks(links){
    var i = 0;
    var linkList = '' ;

    while(i < links.length){
        linkList += `
          <li>
            <a data-navigo href="./${lowerCase(links[i])}">
              ${links[i]}
            </a>
          </li>
        `;

        i++;
    }

    return linkList;
}

export default function Navigation(state){
    return `
    <div id="navigation">
      <ul class="container">
        ${buildLinks(state.links)}
      </ul>
    </div>
  `;
}
