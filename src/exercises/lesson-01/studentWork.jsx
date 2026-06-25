//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const name = 'Anya';
  const age = 30;
  const hobbies = ['reading', 'hiking', 'cooking'];

  return (
    <div>
      {/* add JSX here */}
      <h1>About Me</h1>
      <p>
        {' '}
        I am {name} and I am {age} years old.{' '}
      </p>
      <h2>My hobbies are:</h2>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
