const POSTS_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts/';

/**
 * @typedef {object} Post
 * @property {number} userId
 * @property {number} id
 * @property {string} title
 * @property {string} body
 */

/**
 * @param {string} postId
 * @returns {Promise<Post>}
 */
export function getSinglePost(postId) {
  if (!postId) {
    throw new Error('[getPost]: postId parameter is required!');
  }
  // TODO: use this `url` const to fetch the list of posts
  // and return some JSON data.
  // eslint-disable-next-line no-unused-vars
  const url = `${POSTS_ENDPOINT}${postId}`;
}

/**
 * @returns {Promise<Post[]>}}
 */
export function getPosts() {
  // TODO: use this `url` const to fetch the list of posts
  // and return some JSON data.
  // eslint-disable-next-line no-unused-vars
  const url = POSTS_ENDPOINT;
}
