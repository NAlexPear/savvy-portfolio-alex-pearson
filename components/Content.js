import * as Pages from './Pages';

export default function Content(state){
    const page = state[state.active];

    return `
      <div id="content">
        <div class="container">
          ${Pages[page.body](state.posts)}
        </div>
      </div>
    `;
}
