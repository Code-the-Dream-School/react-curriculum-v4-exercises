import ExerciseSection from '../../exercises/exerciseSection';
import StudentWork04 from '../../exercises/week-04/studentWork';
import WeekPage from './WeekPage.jsx';

export default function Week04() {
  return (
    <WeekPage>
      <ExerciseSection
        title="Week 04 - React Lifecycle and Hooks Basics"
        week="04"
        StudentWork={StudentWork04}
      />
    </WeekPage>
  );
}
