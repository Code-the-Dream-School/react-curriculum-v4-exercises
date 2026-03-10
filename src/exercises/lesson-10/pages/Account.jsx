import { Link } from 'react-router-dom';

export default function Account({ user }) {
  return (
    <section>
      <h2>Account</h2>
      <p>
        If you can see this page, you are logged in as{' '}
        <strong>{user.firstName}</strong>.
      </p>
    </section>
  );
}
