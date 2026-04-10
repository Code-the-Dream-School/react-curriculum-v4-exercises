//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  const name = 'Aishwarya Dande';
  const age = 37;
  const hobbies = [
    'artwork',
    'cooking',
    'shopping',
    'listeningtomusic',
    'painting',
  ];

  //add variables here
  return (
    <div>
      {/* add JSX here */}
      <h1> {name} </h1>
      <p>
        My name is Aishwarya Dande, im full stack developer having 4 years of
        work experience buildig scalable enterprise level applications i have
        recently graduated launchcode where i got an opportunity to work on full
        stack project called vibe based travel application, im really passionate
        about building applications that brings real impact,i love coding and
        really looking forward to work on impactful applications
      </p>
      <p>My Age is {age}</p>
      <ul>
        {hobbies.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
