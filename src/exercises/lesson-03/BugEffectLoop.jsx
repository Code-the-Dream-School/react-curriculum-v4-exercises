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
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCount(count + 1);
  }, []);

  return <p>Bug 1 Count: {count}</p>;
}

// Explanation:
// The useEffect was missing a dependency array, which caused it to run on every render and created an infinite loop.
// I fixed it by adding an empty dependency array [], so the effect only runs once when the component mounts.
// I also used an eslint-disable comment just to hide a warning about using setCount inside the effect.
