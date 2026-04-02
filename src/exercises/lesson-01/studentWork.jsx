//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const myName = 'Waleed Tarbosh';
  const myAge = 27;
  const hobbies = ['AI', 'Coding', 'Design', 'Gaming', 'Reading'];

  return (
    <div>
      {/* add JSX here */}
      <h1>Hello, I am {myName}</h1>
      <p>I am {myAge} years old</p>
      <h3>My Hobbies:</h3>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
