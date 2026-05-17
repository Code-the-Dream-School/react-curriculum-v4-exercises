const POSTS_ENDPOINT =
  'https://jsonplaceholder.typicode.com/posts/';

/**
 * Instructions:
 * The `POSTS_ENDPOINT` url returns a list of post objects
 * from the JSONPlaceholder API.
 * Your task is to finish implementing the two functions in this file
 * so that they fetch data from the API and return the results as JSON.
 * Then, you will use that data in `<FetchOnRender>` and `<FetchOnClick>`.
 *
 * TIP: A request to `https://jsonplaceholder.typicode.com/posts/`
 * returns an array of posts.
 * A request to `https://jsonplaceholder.typicode.com/posts/1`
 * returns a single post object with an `id` of 1.
 * Try pasting those URLs into your browser to see the results!
 */

/**
 * Should return an array of posts with the following properties:
 * - userId
 * - id
 * - title
 * - body
 */

export async function getPosts() {
  console.log('[getPosts]: fetching list of posts');
  const url = `${POSTS_ENDPOINT}?_limit=10`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Response status: ${response.status}`
      );
    }
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error.message);
  }
}

/**
 * Should return a single post object with the following properties:
 * - userId
 * - id
 * - title
 * - body
 */
export async function getSinglePost(postId) {
  if (!postId) {
    throw new Error(
      '[getSinglePost]: postId parameter is required!'
    );
  }

  const url = `${POSTS_ENDPOINT}${postId}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Response status: ${response.status}`
      );
    }
    const data = await response.json();
    console.log(
      '[getSinglePost]: fetching post with id:',
      postId
    );
    return data;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}
