// TOPIC: StrictMode Effects and Cleanup
// TASK: Try navigating away and back to this page. Notice how the count accelerates. Fix the timer so that it cleans up properly and only one interval runs at a time.

import { useEffect, useState } from "react";

export default function BugStrictModeEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
  }, []);

  return (
    <div>
      <h2>StrictMode Timer Bug</h2>
      <p>Count: {count}</p>
    </div>
  );
}

// Write your explanation of how StrictMode helps us catch this bug