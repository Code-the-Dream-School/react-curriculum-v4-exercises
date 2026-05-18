const POSTS_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts/';

// helper for fetching all posts
export async function getPosts() {

console.log('[getPosts] starting request...');

// limiting results so the UI doesn't get flooded
// probably enough for demo purposes
const limit = 10;

const url = ${POSTS_ENDPOINT}?_limit=${limit};

const response = await fetch(url);

if (!response.ok) {

console.error('[getPosts] request failed with status:', response.status);

throw new Error(`HTTP error! status: ${response.status}`);

}

const data = await response.json();

// returning parsed response
return data;
}

export async function getSinglePost(postId) {

// quick validation check
if (!postId) {
throw new Error('[getSinglePost] postId parameter is required!');
}

console.log('[getSinglePost] fetching post id:', postId);

const url = ${POSTS_ENDPOINT}${postId};

const response = await fetch(url);

if (!response.ok) {

console.warn('single post request failed');

throw new Error(`HTTP error! status: ${response.status}`);

}

const data = await response.json();

// could transform data here later if needed
return data;
}

// old test helper
// async function debugPosts() {
// const posts = await getPosts();
// console.log(posts);
// }