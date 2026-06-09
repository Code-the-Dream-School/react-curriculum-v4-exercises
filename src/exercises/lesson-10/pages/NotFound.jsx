import { Link, useLocation } from 'react-router';

export default function NotFound() {
  const location = useLocation();

  return (
    <section>
      <h2>404: Not Found</h2>
    </section>
  );
}
