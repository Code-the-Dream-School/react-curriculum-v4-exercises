import { useState } from 'react';
import { getSinglePost } from './api';
import './Lesson07Styles.css';

export default function FetchOnClick() {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGetPost = async () => {
    try {
      setIsLoading(true);
      setError(null);
      setPost(null);

      const data = await getSinglePost(1);
      setPost(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      <button type="button" onClick={handleGetPost} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Get post'}
      </button>

      <div className="content">
        {isLoading && <p>Loading post...</p>}

        {error && <p style={{ color: 'red' }}>Error: {error}</p>}

        {post && !isLoading && (
          <div className="post-container">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        )}

        {!post && !isLoading && !error && (
          <p>Click the button above to fetch a post!</p>
        )}
      </div>
    </div>
  );
}
