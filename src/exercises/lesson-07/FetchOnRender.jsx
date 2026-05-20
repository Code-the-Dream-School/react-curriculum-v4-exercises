import { fetchModule } from 'vite';
import './Lesson07Styles.css';
import { getPosts } from './api';
import { useState, useEffect } from 'react';

async function getPost(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
}

function FetchOnRender() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data);
    });
  }, []);
  return (
    <div className="root">
      <h1 className="heading"> fetch await </h1>
      <div className="content">
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

export default FetchOnRender;
