export default function Child({ increment }) {
  return (
    <button
      onClick={() => {
        increment();
      }}

      // or
      // return <button onClick={increment}
    >
      Increment Counter
    </button>
  );
}

// #2 { increment }    // unpacking  — "give me the function"
// #3 increment()      // calling    — "run the function, when the button is clicked"
