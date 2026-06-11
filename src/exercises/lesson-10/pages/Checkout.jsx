import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const navigate = useNavigate();

  function handleGoHome() {
    navigate('.'); // go to Home page
  }

  function handleBack() {
    navigate(-1); // go back one page in history
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
// used in function/ no UI
// useNavigate() = navigation in code
// const navigate = useNavigate();

// navigate("/home");
// What it is:
// a function (NOT a UI element)
// you call it in logic
// it changes the route programmatically
// Use it when:
// inside onClick
// after login/logout
// after API success
// inside useEffect

// Link = user clicks to go somewhere / link UI-> click to navigate
// useNavigate/navigate = code decides where to go / only logic, no UI / use in function
