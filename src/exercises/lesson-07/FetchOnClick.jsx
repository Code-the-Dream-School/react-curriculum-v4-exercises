import './Lesson07Styles.css';
import { getSinglePost } from './api';
import PostsList from './components/PostsList';
import { useState } from 'react';

export default function FetchOnClick() {
  const [singlePost, setSinglePost] = useState([]);
  const [loadingError, setLoadingError] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFetchedData = async () => {
    try {
      setLoading(true);
      const data = await getSinglePost(Math.floor(Math.random() * 101) + 1);
      setSinglePost([data]);
    } catch (err) {
      setLoadingError(true);
      setLoading(false);
      setError(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      <button type="button" onClick={handleFetchedData}>
        Get post
      </button>
      <div className="content">
        {loadingError && (
          <p>
            <strong>{error}</strong>
          </p>
        )}
        {loading && <p>loading...</p>}
        {!loadingError && !loading && <PostsList posts={singlePost} />}
      </div>
    </div>
  );
}
