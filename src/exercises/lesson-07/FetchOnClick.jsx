import { useState } from 'react';
import './Lesson07Styles.css';
// import { getSinglePost } from './api';

export async function getSinglePost(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await response.json();
  return data;
}
{
  id: title: '...';
  body: '...';
}
export default function FetchOnClick() {
  const [post, setPost] = useState(null);

  function handleClick() {
    getSinglePost(1).then((data) => {
      setPost(data);
    });
  }

  return (
    <div>
      <div className="root">
        <h1 className="heading">Fetch single post on click</h1>
        <div className="content">
          // <code>Get post</code> button is clicked
        </div>
      </div>
      <h1>Fetch on Click</h1>

      <button onClick={handleClick}>Get post</button>

      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
}
