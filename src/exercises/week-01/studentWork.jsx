//Week-01 Introduction to React
//Exercise: Build an "About Me" Component in this file 

import AboutMe from "./components/AboutMe";
import { age, lastName, hobbies, name } from "./data/studentInfo";

export default function StudentWork() {
  return (
    <div>
      <AboutMe
        name={name}
        lastName={lastName}
        age={age}
        hobbies={hobbies} />
    </div>
  );
}
