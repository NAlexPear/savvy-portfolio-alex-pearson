import Post from '../Post';
import { html } from 'lit-html';

export default function Blog(state){
    return html`${state.posts.map(Post)}`;
}


