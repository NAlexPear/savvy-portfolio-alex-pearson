function mapPost(post){
    return `
    <div>
      <h3>${post.title}</h3>
      <p>${post.body}</p>
    </div>
  `;
}

export default (state) => state
    .posts
    .map(mapPost)
    .join('');
