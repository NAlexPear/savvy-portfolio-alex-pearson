import { html } from 'lit-html';

export default function Post(post){
    return html`
      <div class="post">
        <h2>${post.id}. ${post.title}</h2>
        <p>${post.body}</p>
      </div>
    `;
}
