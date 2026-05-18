const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export async function getPosts() {
  const response = await fetch(`${BASE_URL}?_limit=10`);

  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  const data = await response.json();

  return data;
}

export async function getSinglePost(postId) {
  const response = await fetch(`${BASE_URL}/${postId}`);

  if (!response.ok) {
    throw new Error('Failed to fetch post');
  }

  const data = await response.json();

  return data;
}
