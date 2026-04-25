export default function PostListItem({ post }) {
  return (
    <>
      <li>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </li>
    </>
  );
}
