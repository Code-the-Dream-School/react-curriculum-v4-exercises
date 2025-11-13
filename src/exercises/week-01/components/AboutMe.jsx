// Component AboutMe for displaying personal information

export default function AboutMe({ name, lastName, age, hobbies }) {
  return (
    <section>
      <h1>About Me</h1>
      <p>
        Hi! My name is {name} {lastName}. I am {age} years old.
      </p>

      <h2>My Hobbies</h2>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </section>
  );
}
