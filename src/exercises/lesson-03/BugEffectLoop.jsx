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
    setCount((prevCount) => prevCount + 1);
  }, []);

  return <p>Bug 1 Count: {count}</p>;
}

// Explanation:
// Regardless if there's a dependency or not, setState is a property of useState, which triggers a re-render. The re-render will cause a useeffect to run again, which will trigger the setState again, which causes another re-render. The useEffect will continue in an endless loop. The fix is to use an empty dependency array to tell React to run the effect once after the first render. Also as a bonus, relying on the snapshot of the previous state instead of stale values of count is a more viable method whenever setting state.
