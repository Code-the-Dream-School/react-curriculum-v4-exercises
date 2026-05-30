const POSTS_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts/';

/**
 * Fetches a list of posts from JSONPlaceholder.
 *
 * The `_limit=10` query parameter keeps the UI smaller by returning
 * only the first 10 posts instead of all 100 posts.
 */
export async function getPosts() {
  console.log('[getPosts]: fetching list of posts');

  const url = `${POSTS_ENDPOINT}?_limit=10`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('[getPosts]: failed to fetch posts');
  }

  return response.json();
}

/**
 * Fetches one post by its ID from JSONPlaceholder.
 *
 * @param {number} postId - The ID of the post to fetch.
 */
export async function getSinglePost(postId) {
  if (!postId) {
    throw new Error('[getSinglePost]: postId parameter is required!');
  }

  console.log('[getSinglePost]: fetching post with id:', postId);

  const url = `${POSTS_ENDPOINT}${postId}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`[getSinglePost]: failed to fetch post with id ${postId}`);
  }

  return response.json();
}
