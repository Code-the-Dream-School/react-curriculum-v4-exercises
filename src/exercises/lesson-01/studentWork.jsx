//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  const information = [
    { id: 1, title: 'Lilian' },
    { id: 2, title: '57' },
  ];
  const hobbies = [
    { id: 3, title: 'travel' },
    { id: 4, title: 'write' },
  ];
  return (
    <div>
      <h1> About me</h1>
      <p> Hi, my name is Lilian and I enyoy learning new things</p>

      <ul>
        {information.map((information) => (
          <li key={information.id}>{information.title}</li>
        ))}
      </ul>

      <h2> My Hobbies </h2>
      <ul>
        {hobbies.map((hobbies) => (
          <li key={hobbies.id}>{hobbies.title}</li>
        ))}
      </ul>
    </div>
  );
}
