import {
    capitalize,
    kebabCase
} from 'lodash';


function Repo(repo){
    var name = kebabCase(repo.name)
        .split('-')
        .map(capitalize)
        .join(' ');

    return `
      <li>
        <a href="${repo.html_url}">${name}</a>
      </li>
    `;
}

export default function Home(state){
    var repos = state
        .repos
        .map(Repo)
        .join('');

    return `
      <ol id="repos">
        ${repos}
      </ol>
      <p class="emphasized">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, natus? In delectus deserunt culpa suscipit, molestias sit placeat aspernatur quos cum vero. Eaque ad architecto, eos hic nulla qui maxime?</p>
      <p class="emphasized">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sequi natus, autem delectus architecto itaque atque consequuntur quaerat quo, voluptates aspernatur hic doloremque saepe iste tempore magni vel harum explicabo.</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore odio, error facere tempore, rem recusandae quo iste ex eveniet corrupti, pariatur blanditiis voluptates expedita eos atque excepturi soluta? Odio, distinctio?</p>
      <ul>
        <li>
          <a href="https://github.com/nalexpear">
            GitHub profile
          </a>
        </li>
        <li class="whipped">
          <a href="mailto:alex@savvycoders.com">
            Send me an email
          </a>
        </li>
        <li>
          <a class="emphasized" href="https://twitter.com/nalexpearson">
            @NAlexPearson
          </a>
        </li>
      </ul>
      <ol>
        <li class="emphasized">First</li>
        <li>Second</li>
        <li>Third</li>
      </ol>
  `;
}
