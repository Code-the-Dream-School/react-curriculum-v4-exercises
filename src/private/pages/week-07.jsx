import ExerciseSection from '../../exercises/exerciseSection';
import StudentWork07 from '../../exercises/week-07/studentWork';
import WeekPage from './WeekPage.jsx';

export default function Week07() {
  return (
    <WeekPage>
      <ExerciseSection
        title="Week 07 - Fetching and Displaying Data"
        week="07"
        StudentWork={StudentWork07}
      />
    </WeekPage>
  );
}
