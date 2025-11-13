//Week-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const student = {
    firstName: 'Stephen',
    lastName: 'Lewis',
    age: 40,
    hobbies: [
      'Disc Golf',
      'XR Research',
      'Reading my Bible',
      'Magic the Gathering',
      'Putting good Vibes out there',
    ],
  };
  return (
    <div>
      {/* add JSX here */}
      <h1>The Whimsical Wizard: {student.firstName}</h1>
      <p> Students output will go here </p>
    </div>
  );
}
