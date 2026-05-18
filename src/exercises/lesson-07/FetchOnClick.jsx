import './Lesson07Styles.css';
import { useState } from 'react';
import { getSinglePost } from './api';

export default function FetchOnClick() {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  async function handleGetPost() {
    setIsLoading(true);
    setErrorMessage('');

    try {
      const data = await getSinglePost(1);
      setPost(data);
    } catch (error) {
      setErrorMessage(error.message);
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
        {isLoading && <p>Loading post...</p>}

        {errorMessage && <p>{errorMessage}</p>}

        {post && (
          <>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </>
        )}
      </div>
    </div>
  );
}
