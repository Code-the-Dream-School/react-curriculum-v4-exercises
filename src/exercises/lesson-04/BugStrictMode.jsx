// TOPIC: StrictMode Effects and Cleanup
// TASK: Notice how the count increments incorrectly based on the `setInterval` logic. Fix the useEffect so that the counter increments correctly.

import { useEffect, useState } from 'react';

export default function BugStrictMode() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>StrictMode Timer Bug</h2>
      <p>Count: {count}</p>
    </div>
  );
}

// Write your explanation of how StrictMode helps us catch this bug
// The problem was that the effect didn't have a cleanup function, so every time it ran,
// it would create a new setInterval without stopping the old one. This meant multiple timers
// were running at the same time, making the count go up way too fast. StrictMode caught this
// by running the effect twice in development mode, which made the bug super obvious.
// I fixed it by adding a cleanup function to clear the interval, so now only one timer runs.
