// TOPIC: StrictMode Effects and Cleanup
// TASK: Notice how the count increments incorrectly based on the `setInterval` logic. Fix the useEffect so that the counter increments correctly.

import { useEffect, useState } from 'react';

export default function BugStrictMode() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // setInterval(callback, delay) means
    // Run this function every X milliseconds
    // It keeps running forever until you stop it
    const id = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => clearInterval(id); // ← stop the interval on unmount
  }, []);

  return (
    <div>
      <h2>StrictMode Timer Bug</h2>
      <p>Count: {count}</p>
    </div>
  );
}

// Write your explanation of how StrictMode helps us catch this bug

// ✔ StrictMode runs your effect twice
// ✔ That creates two intervals
// ✔ Cleanup removes the first interval
// ✔ Only the second interval remains
// ✔ This proves your effect is safe and leak‑free

// StrictMode does:
// Mount #1
// Unmount (simulated)
// Mount #2

// During the simulated unmount:
// React calls your cleanup function //return () => clearInterval(id);
// Cleanup clears interval #1
// So interval #1 stops
// Then mount #2 creates interval #2
// Only interval #2 runs
// This is correct behavior.
