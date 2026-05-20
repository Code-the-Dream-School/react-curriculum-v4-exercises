import './Lesson07Styles.css';

import { getSinglePost } from './api';

async function Post(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  const data = await response.json();

  return data;
}
function FetchOnClick() {
  const [post, setPost] = useState(null);
}
async function handleGetPost() {
  const data = await getSinglePost(1);

  setPost(data);
}

function FetchOnClick() {
  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      <button type="button">Get post</button>
      <div className="content">
        <code>Get post</code> button is clicked
        <button onClick={handleGetPost}>Get post</button>
        <div className="content">
          {post && (
            <>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </>
          )}
          ;
        </div>
      </div>
    </div>
  );
}
export default FetchOnClick;
