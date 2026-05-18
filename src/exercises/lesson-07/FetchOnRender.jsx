import { useState, useEffect } from 'react';
import { getPosts } from './api';

import './Lesson07Styles.css';

export default function FetchOnRender() {

const [posts, setPosts] = useState([]);

const [isLoading, setIsLoading] = useState(false);

// keeping this simple for now instead of storing full error object
const [error, setError] = useState(null);

useEffect(() => {

async function loadPosts() {

  setIsLoading(true);

  // clearing previous errors before retrying
  setError(null);

  try {

    const data = await getPosts();

    // just making sure we don't accidentally set undefined
    setPosts(data || []);

  } catch (err) {

    console.log('could not fetch posts:', err);

    setError('Failed to load posts. Please try again later.');

  } finally {

    setIsLoading(false);
  }
}

loadPosts();

// empty dependency array = only run once

}, []);

return (
<div className="root">

  <h1 className="heading">
    Fetch list of posts on render
  </h1>

  <div className="content">

    {isLoading && (
      <p>Loading posts...</p>
    )}

    {error && (
      <p style={{ color: 'red' }}>
        {error}
      </p>
    )}

    {!isLoading && !error && posts.length === 0 && (
      <p>No posts available.</p>
    )}

    {!isLoading && !error && posts.map((post) => {

      return (
        <article
          key={post.id}
          style={{ marginBottom: '16px' }}
        >

          <h2>{post.title}</h2>

          <p>
            {post.body}
          </p>

          

        </article>
      );
    })}

  </div>

</div>

);
}