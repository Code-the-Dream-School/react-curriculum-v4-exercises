// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render

import { useRef } from 'react';

export default function FindCorrectHook() {
  const clickCount = useRef(0);
  const buttonRef = useRef(null);

  function handleClick() {
    clickCount.current++;

    if (buttonRef.current) {
      buttonRef.current.innerText = `${clickCount.current} Clicks`;
    }
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
