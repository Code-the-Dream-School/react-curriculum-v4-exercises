// TOPIC: Event Bubbling & Stopping Propagation
// TASK: Ensure only the inner button's action triggers an alert when the button is pushed

export default function BugEventPropagation() {
  function handleOuterClick() {
    alert("RED BOX CLICKED ❌ Don't show me!");
  }

  function handleInnerClick(e) {
    e.stopPropagation(); // Stops the event from hitting the div
    alert('Button Clicked ✅');
  }

  return (
    <div style={{ padding: 20, border: '2px solid red' }} onClick={handleOuterClick}>
      <button onClick={handleInnerClick}>Click inner button</button>
    </div>
  );
}