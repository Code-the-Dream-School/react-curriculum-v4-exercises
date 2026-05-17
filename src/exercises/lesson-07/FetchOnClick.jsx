import './Lesson07Styles.css';
import LoadingIndicator from './LoadingIndicator';
import { getSinglePost } from './api';
import { useState } from 'react';

export default function FetchOnClick() {
  const [postData, setPostData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState('');

  async function handleClick() {
    const result = await getSinglePost(1);
    setPostData(result);
    setIsLoading(false);
  }

  return (
    <div className="root">
      <h1 className="heading">
        Fetch single post on click
      </h1>
      <button type="button" onClick={handleClick}>
        Get post
      </button>
      {isLoading ? (
        <LoadingIndicator IsLoading={isLoading} />
      ) : (
        postData && (
          <div className="content">
            <h2>{postData?.title}</h2>
            <p>{postData?.body}</p>
          </div>
        )
      )}
    </div>
  );
}
