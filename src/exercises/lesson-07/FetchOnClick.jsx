import './Lesson07Styles.css';
import { getSinglePost } from './api.js';
import { useState } from 'react';

export default function FetchOnClick() {
  const [post, setPost] = useState('');

  async function fetchPost() {
    const number = Math.floor(Math.random() * 100);
    console.log(number);
    const post = await getSinglePost(number);
    setPost(post);
  }
  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      <button type="button" onClick={fetchPost}>
        Get post
      </button>
      <div className="content">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
  );
}
