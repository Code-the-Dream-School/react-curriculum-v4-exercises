import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const navigate = useNavigate();

  function handleGoHome() {
    navigate('/lessons/lesson-10');
  }

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
