// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render
import { useRef } from 'react';

export default function FindCorrectHook() {
  const clickCount = useRef(0);

  function handleClick() {
    clickCount.current++;
    console.log("Clicks saved without re-render:", clickCount.current);
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      {/* Note: This UI won't update visually until a re-render happens elsewhere! */}
      <button onClick={handleClick}>Log Clicks to Console</button>
    </div>
  );
}
