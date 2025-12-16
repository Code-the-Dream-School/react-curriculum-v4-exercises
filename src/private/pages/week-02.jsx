import WeekPage from './WeekPage.jsx';
import ExerciseSection from '../../exercises/exerciseSection';
import StudentWork02 from '../../exercises/week-02/studentWork';

export default function Week02() {
  return (
    <WeekPage>
      <ExerciseSection
        title="Week 02 - Building with ReactDOM and Components "
        week="02"
        StudentWork={StudentWork02}
      />
    </WeekPage>
  );
}
