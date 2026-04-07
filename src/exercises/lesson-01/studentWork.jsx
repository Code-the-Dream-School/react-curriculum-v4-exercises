//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const name = 'Yuhan Kong';

  const age = 32;

  const hobbies = ['Cooking', 'Doing yoga', 'Hiking'];

  return (
    <div>
      {/* add JSX here */}
      <h1>About me</h1>
      <p>
        Hi, my name is {name} and I currently live in Seattle.I have a
        background in finance and previously worked as a clearing accountant,
        where I collaborated with engineers to improve workflows through
        automation. That experience sparked my interest in programming. Outside
        of coding, I enjoy:
      </p>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
      <p> Student output will go here </p>
    </div>
  );
}
