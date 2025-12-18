import ExerciseSection from '../../exercises/exerciseSection';
import StudentWork06 from '../../exercises/week-06/studentWork';
import WeekPage from './WeekPage.jsx';

export default function Week06() {
  return (
    <WeekPage>
      <ExerciseSection
        title="Week 06 - Writing Reusable Components"
        week="06"
        StudentWork={StudentWork06}
      />
    </WeekPage>
  );
}
