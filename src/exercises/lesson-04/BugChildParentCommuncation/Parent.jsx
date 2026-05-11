import { useState } from 'react';
import Child from './Child';

export default function Parent() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Parent-Child Communication</h2>
      <Child increment={increment} />
      <p>Counter: {count}</p>
    </div>
  );
}

// #1 increment={increment}  →  PASSING the function
