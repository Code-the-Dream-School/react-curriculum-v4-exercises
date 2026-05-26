import './Lesson07Styles.css';
import getPosts from './api.js';
import { useEffect, useState } from 'react';

export default function FetchOnRender() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadPosts() {
      try {
        setLoading(true);
        setError(null);
        const response = await getPosts();
        setPosts(response);
      } catch {
        setError('Failed to load posts');
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
  }, []);

  // if return
  // “Stop everything and show ONLY this screen.”

  // Only loading OR only error
  // Nothing else renders at all

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="root">
      <h1 className="heading">Fetch list of posts on render</h1>
      <div className="content">
        TODO: Replace me with fetched data when the component renders
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

getPosts();

// You want posts immediately when the page loads.

// That means:
// useEffect(() => {
//   loadPosts()
// }, [])

// React renders component → useEffect runs automatically → fetch starts.
// Without useEffect, the fetch would not automatically happen on render.
