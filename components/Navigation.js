export default function Navigation(){
    return `
      <div id="navigation">
        <ul>
          <li><a href="blog/">BLOG</a></li>
          <li><a href="contact/">CONTACT</a></li>
          <li>
            <a href="">PROJECTS</a>

            <ul>
              <li><a href="">first</a></li>
              <li><a href="">second</a></li>
              <li><a href="">third</a></li>
            </ul>
          </li>
        </ul>
      </div>
    `;
}
