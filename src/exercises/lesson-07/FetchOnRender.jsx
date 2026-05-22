// import { fetchModule } from 'vite';
import './Lesson07Styles.css';
// import { getPosts } from './api';
import { useState, useEffect } from 'react';

export async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
}
{
  id: title: '...';
  body: '...';
}
export default function FetchOnRender() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <div>
      <h1>Posts</h1>

      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
