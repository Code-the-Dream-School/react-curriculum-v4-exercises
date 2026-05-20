import './Lesson07Styles.css';
import { useEffect, useState } from 'react';
import { getPosts } from './api';

export default function FetchOnRender() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadPosts() {
      try {
        const fetchedPosts = await getPosts();
        setPosts(fetchedPosts);
      } catch (fetchError) {
        setError(fetchError.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadPosts();
  }, []);

  return (
    <div className="root">
      <h1 className="heading">Fetch list of posts on render</h1>
      <div className="content">
        {isLoading ? <p>Loading posts...</p> : null}
        {error ? <p>{error}</p> : null}
        {!isLoading && !error
          ? posts.map((post) => (
              <article key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </article>
            ))
          : null}
      </div>
    </div>
  );
}
