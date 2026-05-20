import './Lesson07Styles.css';
import { useState } from 'react';
import { getSinglePost } from './api';

export default function FetchOnClick() {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleGetPost() {
    setIsLoading(true);
    setError('');

    try {
      const fetchedPost = await getSinglePost(1);
      setPost(fetchedPost);
    } catch (fetchError) {
      setError(fetchError.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      <button type="button" onClick={handleGetPost}>
        Get post
      </button>
      <div className="content">
        {isLoading ? <p>Loading post...</p> : null}
        {error ? <p>{error}</p> : null}
        {!isLoading && !error && post ? (
          <article>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </article>
        ) : null}
      </div>
    </div>
  );
}
