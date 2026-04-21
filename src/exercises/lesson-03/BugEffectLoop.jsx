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
    const timer = setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 0);

    return () => clearTimeout(timer);
  }, []);
  return <p>Bug 1 Count: {count}</p>;
}

// Explanation:
// (Write your explanation here)
// Earlier useEffect had no dependency array, so it ran after every render.
// Since setCount updates state, it caused continuous re-renders.
// Adding [] makes the effect run only once after the first render,
// preventing the infinite loop.
