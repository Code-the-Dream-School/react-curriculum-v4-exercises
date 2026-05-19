import './Lesson07Styles.css';
import { useEffect, useState } from 'react';
import { getPosts } from './api';

export default function FetchOnRender() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data);
    });
  }, []);
  return (
    <div className="root">
      <h1 className="heading">Fetch list of posts on render</h1>
      <div className="content">
        {posts.map((post) => (
          <div key={post.id}></div>
        ))}
      </div>
    </div>
  );
}
