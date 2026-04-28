// TOPIC: Correct useRef usage to control DOM elements
// TASK: Implement focusing an input field when the button is clicked.

import { useRef } from 'react';

export default function FillRefFocus() {
  // 1. Create a ref to hold the input DOM element
  const inputRef = useRef(null);

  function focusInput() {
    // 3. Access the current DOM node and call the native focus() method
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <div>
      <h2>useRef: Focusing an Input</h2>
      <input ref={inputRef} type="text" placeholder="Type here..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
