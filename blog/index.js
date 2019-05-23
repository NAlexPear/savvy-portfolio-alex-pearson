const posts = [
    {
        'author': 'Benedict Cumberbund',
        'title': 'Celebrity Crime Skyrockets!',
        'blurb': 'Lorem ipsum dolor sit amet'
    },
    {
        'author': 'Benedict Cumberbund',
        'title': 'I look like an otter',
        'blurb': 'Lorem ipsum dolor sit amet'
    },
    {
        'author': 'Benedict Cumberbund',
        'title': 'Dr. Strange: A retrospective',
        'blurb': 'Lorem ipsum dolor sit amet'
    },
    {
        'author': 'Agatha Christie',
        'title': 'Murder on the JavaScript Express',
        'blurb': 'Lorem ipsum dolor sit amet'
    }
];

function Post(post){
    return `
      <div>
        <h2>${post.title}</h2>
        <h3>by: ${post.author}</h3>
        <p>${post.blurb}</p>
      </div>
    `;
}

function Content(items){
    let content = '';

    items.forEach((item) => content = `${content}${Post(item)}`);

    return content;
}

document.querySelector('#content').innerHTML = Content(posts);
