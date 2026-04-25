import PostListItem from './PostsListItem';

export default function PostsList({ posts }) {
  return (
    <>
      <ul>
        {posts.map((post) => (
          <PostListItem key={post.id} post={post} />
        ))}
      </ul>
    </>
  );
}
