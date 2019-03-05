export default function Navigation(){
    return `
    <div id="navigation">
      <ul class="container">
        <li>
          <a href="./blog">blog</a>
        </li>
        <li>
          <a href="./contact/">contact</a>
        </li>
        <li>
          <a href="./projects/">projects</a>
          <ul>
            <li><a href="">First</a></li>
            <li><a href="">Second</a></li>
            <li><a href="">Third</a></li>
          </ul>
        </li>
      </ul>
    </div>
  `;
}
