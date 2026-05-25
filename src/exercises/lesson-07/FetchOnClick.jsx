import './Lesson07Styles.css';
import { getSinglePost } from './api.js';
import { useState } from 'react';

export default function FetchOnClick() {
  const [post, setPost] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  async function fetchPost() {
    setIsLoading(true);
    const number = Math.floor(Math.random() * 100) + 1;
    console.log(number);
    try {
      const post = await getSinglePost(number);
      setPost(post);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      <button type="button" onClick={fetchPost}>
        Get post
      </button>
      <div className="content">
        {error ? (
          <p>{error}</p>
        ) : isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            {' '}
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </>
        )}
      </div>
    </div>
  );
}
