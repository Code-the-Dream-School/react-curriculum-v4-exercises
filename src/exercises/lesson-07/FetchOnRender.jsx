import './Lesson07Styles.css';
import { useEffect, useState } from 'react';
import { fetchPosts } from './api';

export default function FetchOnRender() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <div className="root">
      <h1 className="heading">Fetch list of posts on render</h1>

      <div className="content">
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
