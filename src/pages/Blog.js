function Post(post){
    return `
    <li>
      <h4>${post.title}</h4>
      <p>${post.body}</p>
    </li>
  `;
}

function buildPosts(posts){
    return posts
        .map(Post)
        .join('');
}

export default function Blog(state){
    return `
    <ol class="container">
      ${buildPosts(state.posts)}
    </ol>
  `;
}
