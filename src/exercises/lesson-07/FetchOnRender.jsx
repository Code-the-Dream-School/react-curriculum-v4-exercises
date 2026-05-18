import { useEffect, useState } from 'react';
import { getPosts } from './api';

export default function FetchOnRender() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const data = await getPosts();
      setPosts(data);
    }

    loadPosts();
  }, []);

  return (
    <div>
      <h2>Posts</h2>

      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      ))}
    </div>
  );
}
