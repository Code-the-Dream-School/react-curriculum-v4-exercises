// src/exercises/lesson-03/BugMutatedState.jsx

/*
  BUG #2 — State Issue

  This component displays a count and updates it when the button is clicked.
  However, the way the count is being changed causes the component to behave
  incorrectly.
*/

import { useState } from 'react';
export default function BugMutatedState() {
  let [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Bug 2 Count: {count}</p>
      <button onClick={handleAdd}>Add 1</button>
    </div>
  );
}

// Explanation:
// The problem was that the state was being mutated directly by doing count++ first, then passing it to setCount.
// React needs to see a NEW value to know that the state changed and trigger a re-render. When you mutate the
// existing value, it's still technically the same reference, so React doesn't detect the change. The fix was
// to pass the new value directly to setCount like setCount(count + 1). Now React sees a new value and
// re-renders the component properly.
