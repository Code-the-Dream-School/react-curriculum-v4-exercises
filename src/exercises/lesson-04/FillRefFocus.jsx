// TOPIC: Correct useRef usage to control DOM elements
// TASK: Implement focusing an input field when the button is clicked.
import { useRef } from 'react';
export default function FillRefFocus() {
  const inputRef = useRef(); //created a ref for the input
  // {current:null}
  function focusInput() {
    inputRef.current.focus(); //manually control DOM elements with refs
  }

  return (
    <div>
      <h2>useRef: Focusing an Input</h2>

      <input type="text" placeholder="Type here..." ref={inputRef} />

      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

// When the button is clicked:
// React calls focusInput
// focusInput calls .focus() on the DOM input
// The input gets focused
// now cursor is inside the input
