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
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <p>Bug 2 Count: {count}</p>
      <button onClick={handleAdd}>Add 1</button>
    </div>
  );
}

// Explanation:
// React batches updates. This means if you rely on the current snapshot of a component and/or app's state, the results can be highly inconsistent. This leads to stale updates. Relying on the previous state gives you a more accurate comparison regardless of when the update runs. count could be outdated, and prevCount is always a fresh value to compare.
