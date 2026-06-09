import { Link, useLocation } from 'react-router-dom';

export default function NotFound() {
  const location = useLocation();

  return (
    <section>
      <h2>404: Not Found</h2>

      <p>Invalid path: {location.pathname}</p>

      <Link to="/">Go Home</Link>
    </section>
  );
}
