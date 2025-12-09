// TOPIC: Event Bubbling & Stopping Propagation
// TASK: Ensure only the inner button's action triggers an alert

export default function BugEventPropagation() {
  function handleOuterClick() {
    alert("Sensitive action triggered! ❌ Dont show me!");
  }

  function handleInnerClick() {
    alert("Only this action should trigger.");
  }

  return (
    <div
      style={{ padding: 20, border: "2px solid red" }}
      onClick={handleOuterClick}
    >
      <button onClick={handleInnerClick}>Click inner button</button>
    </div>
  );
}
