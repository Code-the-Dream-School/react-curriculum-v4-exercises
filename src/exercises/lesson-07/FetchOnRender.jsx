import { useEffect, useState } from 'react';
import './Lesson07Styles.css';
import { getPosts } from './api';
import LoadingIndicator from './LoadingIndicator';
import ErrorMessage from './ErrorMessage';

export default function FetchOnRender() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    async function startFetching() {
      try {
        const result = await getPosts();
        setPosts(result);
        setIsLoading(false);
      } catch (error) {
        setErrorMessage(error.message);
      }
    }
    startFetching();
  }, []);

  return (
    <div className="root">
      <h1 className="heading">
        Fetch list of posts on render
      </h1>
      {errorMessage ? (
        <ErrorMessage message={errorMessage} />
      ) : isLoading ? (
        <LoadingIndicator IsLoading={isLoading} />
      ) : (
        <div className="content">
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
