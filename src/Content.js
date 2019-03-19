import * as Pages from './pages';


export default function Content(state){
    return `
    <div id="content">
      <div class="container">
        ${Pages[state.body]()}
      </div>
    </div>
  `;
}
