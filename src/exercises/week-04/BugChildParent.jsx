// Topic: Passing callbacks from parent → child
// TASK: Make the child button increment the parent's count when clicked.

export default function BugChildParentCommunication() {
  function Parent() {
    const [count, setCount] = useState(0);

    function increment() {
      setCount(count + 1);
    }

    return (
      <div>
        <h2>Parent Count: {count}</h2>
        <Child />
      </div>
    );
  }

  function Child() {
    return (
      <button
        onClick={() => {}}
      >
        Increase Parent Count
      </button>
    );
  }

  return <Parent />;
}