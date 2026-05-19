const POSTS_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts/';

export function getPosts() {
  console.log('[getPosts]: fetching list of posts');

  const url = `${POSTS_ENDPOINT}?_limit=10`;

  return fetch(url).then((response) => {
    return response.json();
  });
}

/**
 * Should return a single post object with the following properties:
 * - userId
 * - id
 * - title
 * - body
 */
export function getSinglePost(postId) {
  if (!postId) {
    throw new Error('[getSinglePost]: postId parameter is required!');
  }

  console.log('[getSinglePost]: fetching post with id:', postId);

  const url = `${POSTS_ENDPOINT}${postId}`;

  return fetch(url).then((response) => {
    return response.json();
  });
}
