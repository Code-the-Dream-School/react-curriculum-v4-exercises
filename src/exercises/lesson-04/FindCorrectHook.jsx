// TOPIC: Choose the correct tool: useRef vs useState

import { useRef } from 'react';

// TASK: Make sure it updates the text *without* triggering a re-render
export default function FindCorrectHook() {
  const clickCount = useRef(0);
  const buttonRef = useRef(null);

  function handleClick() {
    clickCount.current++;
    buttonRef.current.textContent = `${clickCount.current} Clicks`;
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button ref={buttonRef} onClick={handleClick}>
        Clicks
      </button>
    </div>
  );
}
