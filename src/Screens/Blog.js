import Post from '../Post';

export default function Blog(state){
    return state
        .posts
        .map(Post)
        .join('');
}


