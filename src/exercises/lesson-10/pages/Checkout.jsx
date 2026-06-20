import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  // useNavigate() returns a function for programmatic navigation
  // (navigating from event handlers / buttons instead of a <Link>).
  const navigate = useNavigate();

  // Navigate to the Home route on click. ".." steps up from the
  // "checkout" route to the lesson base (Home).
  function handleGoHome() {
    navigate('..');
  }

  // navigate(-1) goes back one entry in history — same as the browser Back button
  function handleBack() {
    navigate(-1);
  }

  return (
    <section>
      <h2>Checkout</h2>
      <p>This page exists to practice useNavigate().</p>

      <div style={{ display: 'flex', gap: 10 }}>
        <button onClick={handleGoHome}>Go Home (navigate)</button>
        <button onClick={handleBack}>Back (navigate -1)</button>
      </div>
    </section>
  );
}
