// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render
import React from 'react';

export default function FindCorrectHook() {
  let clickCount = React.useRef(0);
  let buttonRef = React.useRef(null);

  function handleClick() {
    clickCount.current += 1;
    buttonRef.current.innerText = `${clickCount.current} Clicks`;
    console.log(clickCount.current);
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button onClick={handleClick} ref={buttonRef}>
        0 Clicks
      </button>
    </div>
  );
}
