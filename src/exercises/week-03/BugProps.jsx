// src/exercises/week-03/BugProps.jsx

/*
  BUG #3 — Props Not Updating

  This component displays a message based on a prop and includes
  a button that should change that message.

  Right now, the message is being stored in a way that React does not track,
  so the UI does not update when the value changes.

  Use the commented "Explanation" section at the bottom of this week's components.
*/


export default function BugProps({ name = "friend" }) {
  let message = "Hello, " + name;

  function handleChange() {
    message = "Hi, " + name + "!";
  }

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleChange}>Change Greeting</button>
    </div>
  );
}


// Explanation:
// (Write your explanation here)
