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
    setCount((previous) => previous + 1);
  }, []);

  return <p>Bug 1 Count: {count}</p>;
}

// Explanation:
// (Write your explanation here)
// The useEffect originally had no dependency array, so it ran every time the componet re-rendered.
// Since it also updates the count state inside, it caused the component to re-render again and again.
// After adding an empty dependency array [], the effect only runs once when the component first loads
// Also, using the previous value when updating state is safer and avoids potential issues.
