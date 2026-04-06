//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  const name = 'Marquise Davis';
  const age = 24;
  const hobbies = [
    'Basketball',
    'Walking in nature',
    'Philosophy',
    'Anime speculation',
  ];

  return (
    <div>
      <h1>About Me</h1>
      <p>
        My name is {name}. I am a {age} year old based in Durham, North
        Carolina. I am a soon-to-be CS spring graduate of Fayetteville State
        University, and am very excited to go through the intensive curriculum
        that Code The Dream offers! I took a class back when they were holding
        in-person lectures in American Underground back in 2019. Coming back to
        refine those skills and become even more job ready as I embark on the
        development journey that CTD inspired me to go on back then! Glad to be
        back after all these years! Haha!! My hobbies include:
      </p>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby.id}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
