export default function Post(post){
    return `
      <div class="post">
        <h2>${post.id}. ${post.title}</h2>
        <p>${post.body}</p>
      </div>
    `;
}
