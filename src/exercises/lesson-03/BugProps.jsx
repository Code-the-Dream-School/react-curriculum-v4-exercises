// src/exercises/lesson-03/BugProps.jsx

/*
  BUG #3 — Props Not Updating

  This component displays a message based on a prop and includes
  a button that should change that message.

  Right now, the message is being stored in a way that React does not track,
  so the UI does not update when the value changes.

  Use the commented "Explanation" section at the bottom of this lesson's components.
*/

export default function BugProps({ name = 'friend' }) {
  let message = 'Hello, ' + name;

  function handleChange() {
    message = 'Hi, ' + name + '!';
  }

  import { useState } from 'react'; // Don't forget to import this!

export default function BugProps({ name = 'friend' }) {
  // FIX: Initialize the message in state
  const [message, setMessage] = useState('Hello, ' + name);

  function handleChange() {
    // FIX: Use the setter function to trigger a re-render
    setMessage('Hi, ' + name + '!');
  }

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleChange}>Change Greeting</button>
    </div>
  );
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
The original code used a standard JavaScript variable (let message). While the variable's value was being updated inside the handleChange function, React has no way of knowing that a regular variable has changed. In React, the user interface (UI) only updates when there is a change in State or Props. By converting the variable to useState, calling setMessage notifies React that the data has changed, which triggers a re-render and updates the text on the screen.