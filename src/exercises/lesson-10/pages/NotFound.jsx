import { Link, useLocation } from 'react-router-dom';

export default function NotFound() {
  // useLocation() returns info about the current URL.
  // pathname is the part we want to show (e.g. "/some-bad-url").
  const { pathname } = useLocation();

  return (
    <section>
      <h2>404: Not Found</h2>

      {/* Display the invalid path the user tried to reach */}
      <p>
        No route matches the path: <code>{pathname}</code>
      </p>

      {/* Working link back to Home so users aren't stuck.
          ".." steps up from the catch-all route to the lesson base. */}
      <Link to="..">Go back Home</Link>
    </section>
  );
}
