import { Link, useLocation } from 'react-router-dom';

export default function NotFound() {
  const location = useLocation();

  return (
    <section>
      <h2>404: Not Found</h2>
      <p>
        No found for <code>{location.pathname}</code>
      </p>
      <Link to="/lessons/lesson-10">Go Home</Link>
    </section>
  );
}

// What useLocation() does
// It gives you the current browser URL info:

// useLocation() → {
//   pathname: "/products/abc",
//   search: "",
//   hash: "",
// }

// So:
// location.pathname
// = the exact URL user typed or visited.
