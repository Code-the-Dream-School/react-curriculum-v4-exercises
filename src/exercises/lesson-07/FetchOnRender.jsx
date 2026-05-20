import './Lesson07Styles.css';
import { useEffect, useState } from 'react';
import { getPosts } from './api';

export default function FetchOnRender() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getPosts()
      .then((data) => {
        setPosts(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="root">
      <h1 className="heading">Fetch list of posts on render</h1>
      <div className="content">
        {isLoading && <p>Loading</p>}
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
