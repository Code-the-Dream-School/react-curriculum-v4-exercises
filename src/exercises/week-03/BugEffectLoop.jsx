  //src/exercises/week-03/BugEffectLoop.jsx

  /* 
  BUG #1 — Effect Issue 

  This component uses useState and useEffect to update a value.
  The effect is running on every render, which causes the
  component to behave incorrectly.
  */

import { useEffect, useState } from "react";

export default function BugEffectLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  });

  return <p>Bug 1 Count: {count}</p>;
}

// Explanation:
// (Write your explanation here)