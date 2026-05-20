const POSTS_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts/';

export async function getPosts() {
  console.log('[getPosts]: fetching list of posts');

  const url = POSTS_ENDPOINT;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  return await response.json();
}

export async function getSinglePost(postId) {
  if (!postId) {
    throw new Error('[getSinglePost]: postId parameter is required!');
  }

  console.log('[getSinglePost]: fetching post with id:', postId);

  const url = `${POSTS_ENDPOINT}${postId}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch post');
  }

  return await response.json();
}
