// //will hold error boundary for lessons in the future
// //will hold weeks files and directions

import ExerciseSection from '../../exercises/exerciseSection';
import StudentWork11 from '../../exercises/week-11/studentWork';
import WeekPage from './WeekPage.jsx';

export default function Week11() {
  return (
    <WeekPage>
      <ExerciseSection
        title="Week 11 - Security and Deployment"
        week="11"
        StudentWork={StudentWork11}
      />
    </WeekPage>
  );
}
