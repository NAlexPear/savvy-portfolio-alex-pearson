// @TODO: implement drop-downs again

function Link(link){
    return `
      <li>
        <a href="/${link}">${link}</a>
      </li>
    `;
}

export default function Navigation(state){
    var links = '';

    for(let i = 0; i < state.links.length; i++){
        links += Link(state.links[i]);
    }

    return `
      <div id="navigation">
        <ul class="container">
          ${links}
        </ul>
      </div>
    `;
}
