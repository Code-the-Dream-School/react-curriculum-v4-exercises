import ExerciseSection from '../../exercises/exerciseSection';
import StudentWork08 from '../../exercises/week-08/studentWork';
import WeekPage from './WeekPage.jsx';

export default function Week08() {
  return (
    <WeekPage>
      <ExerciseSection
        title="Week 08 - Optimizing with Advanced Hooks"
        week="08"
        StudentWork={StudentWork08}
      />
    </WeekPage>
  );
}
