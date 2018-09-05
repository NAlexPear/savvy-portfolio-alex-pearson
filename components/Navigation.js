export default function Navigation(){
    return `
      <div id="navigation">
        <ul class="container">
          <li>
            <a href="blog">blog</a>
          </li>
          <li>
            <a href="contact">contact</a>
          </li>
          <li>
            <a href="projects">projects</a>
            <ul>
              <li>drop 1</li>
              <li>drop 2</li>
              <li>drop 3</li>
            </ul>
          </li>
        </ul>
      </div>
    `;
}
