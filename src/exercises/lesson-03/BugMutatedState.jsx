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
    count++;
    setCount(count);
  }
function handleAdd() {
    // FIX: Pass the new calculation directly into the setter
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
// (Write your explanation here)
The original code used count++, which is a direct mutation of the state variable. In React, state should be treated as read-only (immutable). While calling setCount(count) afterward technically triggers a re-render, mutating the variable beforehand can lead to unpredictable behavior, especially in more complex components or when using Strict Mode. The correct approach is to pass the incremented value (count + 1) directly to the setter function, ensuring the original state remains unchanged until React replaces it during the next render.
