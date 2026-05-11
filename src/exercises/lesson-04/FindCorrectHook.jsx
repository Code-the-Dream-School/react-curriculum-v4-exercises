// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render
import { useRef } from 'react';
export default function FindCorrectHook() {
  // let clickCount = 0; // ← incorrect implementation
  const clickCount = useRef(0); //stores the number
  // {current:0}
  const buttonRef = useRef(null); //updates the DOM

  function handleClick() {
    clickCount.current += 1;
    buttonRef.current.textContent = `${clickCount.current} Clicks`;
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button onClick={handleClick} ref={buttonRef}>
        Click
      </button>
    </div>
  );
}

// clickCount.current → stores the data
// -This updates the value without triggering a re-render.
// buttonRef.current → points to the DOM element
// -This lets you manually update the UI:
// -Because React is not re-rendering, you must update the DOM yourself.

// const buttonRef = useRef(null)
// null = “nothing here yet”
// Refs start as null because the DOM doesn’t exist during the first render
// After React mounts the DOM, .current gets filled in
// Using the ref before mount → null
// Using it after mount → works
