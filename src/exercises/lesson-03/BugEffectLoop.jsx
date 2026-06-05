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
    setCount(count + 1);
  }, []);

  return <p>Bug 1 Count: {count}</p>;
}

// Explanation:
// The issue was that the useEffect didn't have a dependency array, so it was running every single render.
// That caused this infinite loop: the effect would run, call setCount, which triggered a re-render,
// which ran the effect again, and so on. By adding an empty dependency array [], the effect now only
// runs once when the component first mounts. So the count goes from 0 to 1 on mount and stays there.
