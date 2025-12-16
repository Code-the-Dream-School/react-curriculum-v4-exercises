import ExerciseSection from '../../exercises/exerciseSection';
import StudentWork10 from '../../exercises/week-10/studentWork';
import WeekPage from './WeekPage.jsx';

export default function Week10() {
  return (
    <WeekPage>
      <ExerciseSection
        title="Week 10 - Navigating with React Router"
        week="10"
        StudentWork={StudentWork10}
      />
    </WeekPage>
  );
}
