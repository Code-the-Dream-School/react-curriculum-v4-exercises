//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const name = 'Eriko Kan';
  const age = 51;
  const hobbies = ['coding', 'pug', 'nails', 'traveling'];
  return (
    <div>
      {/* add JSX here */}
      <h1>About me</h1>
      <p>
        My name is {name}. <br />I am {age} years old. <br />I like{' '}
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
        .
      </p>
    </div>
  );
}
