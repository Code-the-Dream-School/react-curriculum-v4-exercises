/**
 * Displays basic user information.
 * This is a reusable presentation component.
 */
export default function UserProfile({ name }) {
  return (
    <section>
      <h2>Welcome, {name}</h2>
    </section>
  );
}
