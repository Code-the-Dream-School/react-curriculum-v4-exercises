export default function Child({ onIncrement }) {
  return <button onClick={onIncrement}>Increment Counter</button>;
}

// The child does not manage the counter itself.
// It receives a callback from the parent.
// Clicking the button tells the parent to update its state.
