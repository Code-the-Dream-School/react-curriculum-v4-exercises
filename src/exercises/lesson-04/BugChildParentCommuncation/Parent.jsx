export default function Parent() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);

  return (
    <div>
      <h2>Parent-Child Communication</h2>
      <p>Counter: {count}</p>
      {/* Pass the function as a prop */}
      <Child onIncrement={increment} />
    </div>
  );
}