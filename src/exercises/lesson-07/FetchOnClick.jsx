import './Lesson07Styles.css';
import { useState } from 'react';
import { getSinglePost } from './api';
export default function FetchOnClick() {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function getPost() {
    setIsLoading(true);

    getSinglePost(1)
      .then((data) => {
        setPost(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      <button type="button">Get post</button>
      <div className="content">
        {isLoading && <p>Loading</p>}
        {post && (
          <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        )}
        <button onClick={getPost}>Get post</button>
      </div>
    </div>
  );
}
