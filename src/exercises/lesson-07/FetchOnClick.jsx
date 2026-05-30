import { useState } from 'react';
import { getSinglePost } from './api';
import './Lesson07Styles.css';

export default function FetchOnClick() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  async function handleGetPost() {
    try {
      setLoading(true);
      setErrorMessage('');

      const postData = await getSinglePost(1);

      setPost(postData);
    } catch (error) {
      console.error(error);
      setPost(null);
      setErrorMessage('Unable to load the post. Please try again later.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>

      <button
        className="button"
        type="button"
        onClick={handleGetPost}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Get post'}
      </button>

      <div className="content">
        {errorMessage && <p>{errorMessage}</p>}

        {!errorMessage && post && (
          <article>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </article>
        )}

        {!loading && !errorMessage && !post && (
          <p>Click the button to fetch a post.</p>
        )}
      </div>
    </div>
  );
}
