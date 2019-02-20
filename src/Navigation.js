export default function Navigation(){
    return `
    <div id="navigation">
      <ul class="container">
        <li>
          <a href="./blog">Blog</a>
        </li>
        <li>
          <a href="./contact/">Contact</a>
        </li>
        <li>
          <a href="./projects/">Projects</a>
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
