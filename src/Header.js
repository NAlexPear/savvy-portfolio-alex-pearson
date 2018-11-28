export default function Header(state){
    return `
      <div id="header">
        <div class="container">
          <h1>${state.title}</h1>
          <h2>My name is Alex Pearson</h2>
        </div>
      </div>
    `;
}
