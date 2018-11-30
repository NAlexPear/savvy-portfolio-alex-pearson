export default function Header(state){
    return `
      <div id="header">
        <div class="container">
          <h1>${state[state.active].title}</h1>
          <h2>My name is Alex Pearson</h2>
        </div>
      </div>
    `;
}
