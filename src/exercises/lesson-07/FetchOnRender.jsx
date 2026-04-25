import './Lesson07Styles.css';
import { getPosts } from './api.js';
import React, { useEffect } from 'react';
import PostsList from './components/PostsList.jsx';

export default function FetchOnRender() {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [loadingError, setLoadingError] = React.useState(false);
  const [error, setError] = React.useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getPosts();
        setPosts(data);
      } catch (err) {
        setError(`Error: ${err.message}`);
        setLoading(false);
        setLoadingError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="root">
      <h1 className="heading">Fetch list of posts on render</h1>
      <div className="content">
        {loadingError && (
          <p>
            <strong>{error}</strong>
          </p>
        )}
        {loading && <p>loading...</p>}
        {!loadingError && !loading && <PostsList posts={posts} />}
      </div>
    </div>
  );
}
