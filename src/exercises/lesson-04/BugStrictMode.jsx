// TOPIC: StrictMode Effects and Cleanup
// TASK: Notice how the count increments incorrectly based on the `setInterval` logic. Fix the useEffect so that the counter increments correctly.

import { useEffect, useState } from 'react';

export default function BugStrictMode() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //Store the interval in a variable so we can clear it later
    const intervalId = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    //Add a cleanup function to prevent memory leaks and double timers
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h2>StrictMode Timer Bug</h2>
      <p>Count: {count}</p>
    </div>
  );
}

// Write your explanation of how StrictMode helps us catch this bug:
// StrictMode deliberately mounts, unmounts, and remounts the component in development to expose side-effect bugs.
// Because the original code lacked a cleanup function, the first interval kept running in the background, causing the state to update twice per second.
// By returning a cleanup function that calls clearInterval, we ensure the old interval is destroyed before a new one is created.
