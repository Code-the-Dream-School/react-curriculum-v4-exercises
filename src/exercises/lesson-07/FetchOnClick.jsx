import { useState } from 'react';
import { getSinglePost } from './api';

export default function FetchOnClick() {
  const [post, setPost] = useState(null);

  async function handleClick() {
    const data = await getSinglePost(1);
    setPost(data);
  }

  return (
    <div>
      <button onClick={handleClick}>Get Post</button>

      {post && (
        <article>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      )}
    </div>
  );
}
