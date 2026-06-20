export default function Account({ user }) {
  return (
    <section>
      <h2>Account</h2>

      <p>
        If you can see this page, you are logged in as{' '}
        <strong>{user.firstName}</strong>.
      </p>

      <p>This route is protected because it only exists when logged in.</p>
    </section>
  );
}
