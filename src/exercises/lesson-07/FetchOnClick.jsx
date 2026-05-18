import { useState } from 'react';

import { getSinglePost } from './api';

import './Lesson07Styles.css';

export default function FetchOnClick() {

const [post, setPost] = useState(null);

const [isLoading, setIsLoading] = useState(false);

// storing a message instead of full error object for simplicity
const [error, setError] = useState(null);

async function handleGetPost() {

setIsLoading(true);

// reset old UI state before fetching again
setError(null);
setPost(null);

try {

  // hardcoded to post #1 for now based on lesson instructions
  const data = await getSinglePost(1);

  if (data) {
    setPost(data);
  }

} catch (err) {

  console.error('failed fetching single post:', err);

  setError('Failed to fetch the post.');

} finally {

  setIsLoading(false);
}

}

return (
<div className="root">

  <h1 className="heading">
    Fetch single post on click
  </h1>

  <button
    type="button"
    className="button"
    onClick={handleGetPost}
    disabled={isLoading}
  >
    {isLoading ? 'Loading...' : 'Get post'}
  </button>

  <div className="content">

    {error && (
      <p style={{ color: 'red' }}>
        {error}
      </p>
    )}

    {post ? (

      <article>

        <h2>{post.title}</h2>

        <p>
          {post.body}
        </p>

        {/* could add author or date here later */}

      </article>

    ) : (

      !isLoading && !error && (
        <p>
          Click the button to load data.
        </p>
      )

    )}

  </div>

</div>

);
}