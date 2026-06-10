import { Link, useLocation } from 'react-router-dom';

export default function NotFound() {
  const location = useLocation();

  return (
    <section>
      <h2>404: Not Found</h2>

      <p>
        Invalid path:
        <code> {location.pathname}</code>
      </p>

      <p>The page you requested does not exist.</p>

      <Link to="/">Go Back Home</Link>
    </section>
  );
}
