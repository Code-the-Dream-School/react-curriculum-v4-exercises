// TOPIC: StrictMode Effects and Cleanup
// TASK: Notice how the count increments incorrectly based on the `setInterval` logic.
// Fix the useEffect so that the counter increments correctly.

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
// React StrictMode helps detect bugs by
// intentionally running components and their effects twice in development.
//  In this example, if the interval is not properly cleaned up, multiple intervals
// can run at the same time, causing the counter to increase faster than expected (for example, by 2 instead of 1).

// By including a cleanup function using `clearInterval`,
// StrictMode helps reveal this issue early, so we can fix it and avoid memory leaks or duplicate side effects in our application.
