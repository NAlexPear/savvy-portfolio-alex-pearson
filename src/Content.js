import * as Pages from './pages';


export default function Content(state){
    var page = state[state.active].body;

    return `
    <div id="content">
      <div class="container">
        ${Pages[page](state)}
      </div>
    </div>
  `;
}
