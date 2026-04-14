//src/exercises/lesson-03/BugEffectLoop.jsx

/* 
  BUG #1 — Effect Issue 

  This component uses useState and useEffect to update a value.
  The effect is running on every render, which causes the
  component to behave incorrectly.
  */

import { useEffect, useState } from 'react';

export default function BugEffectLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('effect is running');
    setCount((current) => current + 1);
  }, []);

  return <p>Bug 1 Count: {count}</p>;
}

// Explanation:
// I added an empty dependency to run the effect only once on mount.

// setCount(count + 1)  // 0 + 1 = always 1,
// setCount(current => current + 1)  // 0 + 1 = 1
// setCount(current => current + 1)  // 1 + 1 = 2
// setCount(current => current + 1)  // 2 + 1 = 3
// keeps getting fresher value each time
