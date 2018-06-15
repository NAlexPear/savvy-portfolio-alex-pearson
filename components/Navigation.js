import { lowerCase } from 'lodash';


function buildLinks(linkArray){
    var i = 0;
    var links = '';
    var link = '';

    while(i < linkArray.length){
        if(linkArray[i] !== 'Home'){
            link = linkArray[i];
        }

        links += `
            <li>
                <a href='/${lowerCase(link)}' data-navigo>
                    ${linkArray[i]}
                </a>
            </li>
        `;

        i++;
    }

    return links;
}

export default function Navigation(state){
    return `
    <div id="navigation">
        <ul>
            ${buildLinks(state.links)}
        </ul>
    </div>
    `;
}
