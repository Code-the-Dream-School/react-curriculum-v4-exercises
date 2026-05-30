import { useEffect, useState } from 'react';
import { getPosts } from './api';
import './Lesson07Styles.css';

export default function FetchOnRender() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    let isMounted = true;

    async function loadPosts() {
      try {
        setLoading(true);
        setErrorMessage('');

        const postData = await getPosts();

        if (isMounted) {
          setPosts(postData);
        }
      } catch (error) {
        console.error(error);

        if (isMounted) {
          setErrorMessage('Unable to load posts. Please try again later.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadPosts();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="root">
      <h1 className="heading">Fetch list of posts on render</h1>

      <div className="content">
        {loading && <p>Loading posts...</p>}

        {!loading && errorMessage && <p>{errorMessage}</p>}

        {!loading &&
          !errorMessage &&
          posts.map((post) => (
            <article key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </article>
          ))}
      </div>
    </div>
  );
}
