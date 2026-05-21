import './Lesson07Styles.css';
import LoadingIndicator from './LoadingIndicator';
import { getSinglePost } from './api';
import { useState } from 'react';
import ErrorMessage from './ErrorMessage';

export default function FetchOnClick() {
  const [postData, setPostData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  // const [error, setError] = useState('');

  async function handleClick() {
    setErrorMessage('');
    setPostData(null);
    setIsLoading(true);

    try {
      const result = await getSinglePost(1);
      setPostData(result);
      setIsLoading(false);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="root">
      <h1 className="heading">
        Fetch single post on click
      </h1>
      <button type="button" onClick={handleClick}>
        Get post
      </button>
      {errorMessage ? (
        <ErrorMessage message={errorMessage} />
      ) : isLoading ? (
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
