// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render 

export default function BugRefWrongUsage() {
  let clickCount = 0; // ← incorrect implementation

  function handleClick() {
    clickCount++;
    console.log("count:", clickCount);
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <p>Open the console to see the counter updates.</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}