//page shell for each week
//will hold error boundary for lessons in the future
//will hold weeks files and directions
import WeekPage from './WeekPage.jsx';
import ExerciseSection from '../../exercises/exerciseSection';
import StudentWork01 from '../../exercises/week-01/studentWork';

export default function Week01() {
  return (
    <WeekPage>
      <ExerciseSection 
        title="Week 01 - Introduction to React"
        week="01"
        StudentWork={StudentWork01}
      
      />
    </WeekPage>
  );
}
