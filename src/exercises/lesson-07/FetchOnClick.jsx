import './Lesson07Styles.css';
import { useState } from 'react';
import { getSinglePost } from './api';
export default function FetchOnClick() {
  const [post, setPost] = useState(null);

  function getPost() {
    getSinglePost(1);
  }

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      <button type="button">Get post</button>
      <div className="content">
        TODO: Replace me with fetched data when the <code>Get post</code> button
        is clicked
      </div>
    </div>
  );
}
