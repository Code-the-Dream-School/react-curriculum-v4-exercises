//page shell for each week
//will hold error boundary for lessons in the future
//will hold weeks files and directions

import ExerciseSection from '../../exercises/exerciseSection';
import Directions from '../../exercises/week-01/directions';
import StudentWork from '../../exercises/week-01/studentWork';

export default function Week01() {
  return (
    <ExerciseSection
      title="Week 01 - Introduction to React"
      Directions={Directions}
      StudentWork={StudentWork}
    />
  );
}
