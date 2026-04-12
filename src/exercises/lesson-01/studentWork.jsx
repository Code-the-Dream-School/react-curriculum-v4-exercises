//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const name = 'Nasistu';
  const age = '34';
  const hobbies = ['Coding', 'Reading', 'Cooking'];
  return (
    <div>
      <h2>About Me</h2>
      <p>
        {' '}
        Hello, my name is {name}.I am {age} years old.
      </p>
      <u1>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </u1>
    </div>
  );
}
