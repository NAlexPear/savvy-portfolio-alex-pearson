const posts = [
    {
        'title': 'First Post',
        'subtitle': 'Not the Worst Post',
        'lede': 'Leading the way!',
        'body': 'First Post, Coast-to-Coast'
    },
    {
        'title': 'Second Post',
        'subtitle': 'Another',
        'lede': 'Mead for the lede',
        'body': 'This is the next post, better than the first post'
    },
    {
        'title': 'Third Post',
        'subtitle': 'Hello posts',
        'lede': 'yet another lede',
        'body': 'And yet another post, how wonderful!'
    }
];

function getSubtitles(post){
    let subtitles = '';

    if(post.subtitle){
        subtitles += `
            <h3>${post.subtitle}</h3>
            <h4>${post.lede}</h4>
        `;
    }

    return subtitles;
}

function Post(post){
    return `
      <div>
        <h2>${post.title}</h2>
        ${getSubtitles(post)}
        <hr>
        <p>${post.body}</p>
      </div>
      <hr>
    `;
}


document.querySelector('#content').innerHTML = posts.map(Post).join('');

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((guestPosts) => document.querySelector('#content').innerHTML += guestPosts.map(Post).join(''));
