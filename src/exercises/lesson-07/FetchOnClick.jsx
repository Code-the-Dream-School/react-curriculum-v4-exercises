import './Lesson07Styles.css';
import { getSinglePost } from './api.js';
import { useState } from 'react';

export default function FetchOnClick() {
  const [postSingle, setPostSingle] = useState(null); //null =Initially there is no post.
  // if useState(""), "" is String, Strings do not have .title. That can cause errors.
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function loadSinglePost() {
    try {
      setLoading(true); //setLoading(true) → UI shows "Loading..."
      setError(null); //Clear any previous error before starting a new fetch
      const data = await getSinglePost(1);
      setPostSingle(data);
    } catch {
      setError('Failed to load post');
      //fetch fails
      // catch runs → setError(...)
      // finally runs → setLoading(false)
      // UI shows error message

      //   catch {
      //   setError("Failed to load post");}
      // This means:
      // “Something failed → store this message in React state”

      // So now React memory becomes:
      // error = "Failed to load post"
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      <button type="button" onClick={loadSinglePost}>
        Get post
      </button>
      <div className="content">
        TODO: Replace me with fetched data when the <code>Get post</code> button
        is clicked
        {/* && shows loading together with the rest of the UI still rendering */}
        {/* “Show loading message INSIDE the normal UI if loading is true.”
          Button still shows
          Page still shows
          Other UI still renders
          Loading message is just ADDED in */}
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {postSingle && !loading && !error && (
          // If postSingle exists/truthy, render the <div>.
          // This is called conditional rendering in React.

          // If you do this without conditional rendering:

          // React tries to read:
          // postSingle.title
          // immediately on the first render.

          // But initially:
          // postSingle === null

          // So React is basically doing:
          // null.title

          // which causes an error like:
          // Cannot read properties of null

          // Conditional rendering prevents that.

          // {postSingle && ...}
          // means:
          // “Only access .title if postSingle exists.”

          <div>
            <h2>{postSingle.title}</h2>
            <p>{postSingle.body}</p>
          </div>
        )}
      </div>
    </div>
  );
}

// You do NOT want data immediately.

// You want:
// wait until user clicks button
// So the fetch belongs inside the button handler:
// <button onClick={loadSinglePost}>

// When clicked:

// function runs
// fetch happens
// state updates

// No useEffect needed.
// If you used useEffect in FetchOnClick, it would fetch immediately when the page opens, which defeats the purpose of “fetch on click.”
