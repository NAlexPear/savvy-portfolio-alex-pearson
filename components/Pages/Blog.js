import Post from '../Post';

export default function Blog(posts){
    return posts
        .map(Post)
        .join('');
}
