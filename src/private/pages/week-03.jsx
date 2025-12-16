import ExerciseSection from '../../exercises/exerciseSection';
import StudentWork03 from '../../exercises/week-03/studentWork';
import WeekPage from './WeekPage';

export default function Week03() {
  return (
    <WeekPage>
      <ExerciseSection
        title="Week 03 - React Lifecycle and Hooks Basics"
        week="03"
        StudentWork={StudentWork03}
      />
    </WeekPage>
  );
}
