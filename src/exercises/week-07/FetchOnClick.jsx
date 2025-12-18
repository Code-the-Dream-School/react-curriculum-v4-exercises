import Button from './Button';
import './Week07Styles.css';

export default function FetchOnClick() {
  return (
    <div className="post-root">
      <h1 className="heading">Fetch data on click</h1>
      <Button>Get post</Button>
      <div className="content">
        TODO: Replace me with fetched data when the <code>Get post</code> button
        is clicked
      </div>
    </div>
  );
}
