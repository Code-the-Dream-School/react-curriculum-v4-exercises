// src/exercises/lesson-03/BugMutatedState.jsx

/*
  BUG #2 — State Issue

  This component displays a count and updates it when the button is clicked.
  However, the way the count is being changed causes the component to behave
  incorrectly.
*/

import { useState } from 'react';
export default function BugMutatedState() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    // count++;
    // setCount(count);

    setCount((current) => current + 1);
  }
  console.log(count);

  return (
    <div>
      <p>Bug 2 Count: {count}</p>
      <button onClick={handleAdd}>Add 1</button>
    </div>
  );
}

// Explanation:
// The fix is from let to const to prevent direct state mutation. In React, we should never mutate state directly because it can lead to unexpected behavior and bugs.
// count++ changes the count variable directly in useState.
// setCount(count) is called with the same value of count, so React doesn't see a change and doesn't re-render.
// The fix is to use function to update the state, which gives us the current value of count and allows us to increment it properly. This way, React sees the change and re-renders the component with the updated count.
