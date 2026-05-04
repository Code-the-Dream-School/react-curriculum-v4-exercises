// TOPIC: Choose the correct tool: useRef vs useState
import { useRef } from 'react';

// TASK: Make sure it updates the text *without* triggering a re-render
export default function FindCorrectHook() {
  const clickCount = useRef(0); // ← incorrect implementation
  const buttonRef = useRef(null);

  function handleClick() {
    clickCount.current++; // update value

    // update text manually (no re-render)
    buttonRef.current.textContent = `${clickCount.current} Clicks`;
  }
  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button ref={buttonRef} onClick={handleClick}>
        0 Clicks
      </button>
    </div>
  );
}
//Explanation

// The error occurred because I tried to render clickCount directly inside JSX.
//  When using useRef, the value is stored inside an object with a current property.
//  So clickCount is not a number, but an object like { current: 0 }.
//  React cannot render objects as text, which caused the error.

// To fix this, I did not render the ref object directly. Instead,
//  I initialized the button text as "0 Clicks" and updated it manually
// using buttonRef.current.textContent inside the click handler.

// This approach works because useRef allows us to store and update values
// without triggering a re-render, and we can directly manipulate the DOM using the ref.
