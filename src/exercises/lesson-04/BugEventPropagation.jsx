// TOPIC: Event Bubbling & Stopping Propagation
// TASK: Ensure only the inner button's action triggers an alert when the button is pushed

export default function BugEventPropagation() {
  function handleOuterClick() {
    alert("RED BOX CLICKED ❌ Don't show me!");
  }

  function handleInnerClick(e) {
    e.stopPropagation();
    alert('Button Clicked ✅');
  }

  return (
    <>
      <h2>Stopping Event Propagation</h2>
      <div
        style={{ padding: 20, border: '2px solid red' }}
        onClick={handleOuterClick}
      >
        <button onClick={handleInnerClick}>Click inner button</button>
      </div>
    </>
  );
}

// If you click the button, the browser fires events in this order:
// button → click event
// div (parent) → click event
// body
// html
// document
// So even though you clicked the button, the parent <div> also receives the click.
// So both function are called.(handleOuterClick(), handleInnerClick())
// alert("RED BOX CLICKED");and alert("Button Clicked");

// Event Bubbling
// Child → Parent → Body → Document

// Stopping Propagation
// Child (stop)  X  Parent never receives event

// e.stopPropagation();
// Avoid double actions when child + parent both have click handlers
