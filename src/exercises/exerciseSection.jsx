// this file will be the exercise section that will render title and student work

import { StudentOutput } from '../private/components/studentOutput.jsx';

export default function ExerciseSection({ title, StudentWork, lesson }) {
  return (
    <section>
      <h2>{title}</h2>
      <StudentOutput title="student output" lesson={lesson}>
        {StudentWork ? <StudentWork /> : null}
      </StudentOutput>
    </section>
  );
}
