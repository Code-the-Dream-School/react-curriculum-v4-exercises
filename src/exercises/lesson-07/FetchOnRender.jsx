import { useEffect, useState } from 'react';
import './Lesson07Styles.css';
import { getPosts } from './api';

export default function FetchOnRender() {
  const [posts, setPosts] = useState([]);
  // const [error, setError] = useState('');

  useEffect(() => {
    async function startFetching() {
      const result = await getPosts();
      setPosts(result);
    }
    startFetching();
  }, []);

  return (
    <div className="root">
      <h1 className="heading">
        Fetch list of posts on render
      </h1>
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
    </div>
  );
}
// Fetching data on render
// In FetchOnRender.jsx, import the getPosts() function from src/exercises/lesson-07/api.js.
// Note: This function doesn't do anything yet! You need to finish the logic to make a fetch request in src/exercises/lesson-07/api.js.
// Once getPosts() returns data, display the list of posts in the component.
// Each post should display its title and body. Render these in an <h2> and a <p>, respectively.
