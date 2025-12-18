import ExerciseSection from '../../exercises/exerciseSection';
import StudentWork09 from '../../exercises/week-09/studentWork';
import WeekPage from './WeekPage.jsx';

export default function Week09() {
  return (
    <WeekPage>
      <ExerciseSection
        title="Week 09 - Managing Global State with Context"
        week="09"
        StudentWork={StudentWork09}
      />
    </WeekPage>
  );
}
