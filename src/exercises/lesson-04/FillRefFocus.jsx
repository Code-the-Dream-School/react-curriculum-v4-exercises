// TOPIC: Correct useRef usage to control DOM elements
// TASK: Implement focusing an input field when the button is clicked.
import { useRef } from 'react';
export default function FillRefFocus() {
  const inputRef = useRef(null);
  const focusInput = useRef;
  // function focusInput() {}

  function handleFocusClick() {
    inputref.current.Focus();
  }

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Click button to focus to focus me"
      />
      <button onClick={handleFocusClick}> Focus Input </button>
      <h2>useRef: Focusing an Input</h2>

      <input type="text" placeholder="Type here..." />

      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
