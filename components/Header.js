export default function Header(state){
    return `
      <div id="header">
        <div class="container">
          <h1>${state.title}</h1>
          <img src="https://avatars3.githubusercontent.com/u/9038489?s=460&v=4" alt="My face">
        </div>
      </div>
    `;
}
