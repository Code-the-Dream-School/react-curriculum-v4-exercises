//Week-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  let id = window.crypto.randomUUID();
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
      <h1>
        The Whimsical Wizard: {student.firstName} {student.lastName}
      </h1>
      <p>
        When I am not at working, preparing some wonderful food. I am home at my
        make shift little office, studying hard for class. But thats not always
        the case and I do enjoy a good pod cast, StarTalk being one.
      </p>
      <h3>Other Hobbies Include:</h3>
      <ul>
        {student.hobbies.map((hobbies) => {
          return <li key={id}>{hobbies}</li>;
        })}
      </ul>
    </div>
  );
}
