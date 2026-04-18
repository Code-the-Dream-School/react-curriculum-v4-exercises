// src/exercises/lesson-03/BugProps.jsx

/*
  BUG #3 — Props Not Updating

  This component displays a message based on a prop and includes
  a button that should change that message.

  Right now, the message is being stored in a way that React does not track,
  so the UI does not update when the value changes.

  Use the commented "Explanation" section at the bottom of this lesson's components.
*/
import React from 'react';

export default function BugProps({ name = 'friend' }) {
  let [message, setMessage] = React.useState(' Hello, ' + name);

  function handleChange() {
    setMessage(' Hello, ' + name + '!');
  }

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleChange}>Change Greeting</button>
    </div>
  );
}

// Explanation:
// Import useState(or React.useState) create a state for the message to live in. In the handleChange function, call a setState to change the message that would simply be appending an exclamation point to the message state. This way if you ever need the value of the message state elsewhere, its accessible.
