//will hold error boundary for lessons in the future
//will hold weeks files and directions 

import ExerciseSection from '../../exercises/exerciseSection';
import StudentWork05 from '../../exercises/week-05/studentWork';
import WeekPage from './WeekPage.jsx';


export default function Week05() {
    return (
      <WeekPage>
        <ExerciseSection
        title="Week 05 - "
        week="05"
        StudentWork={StudentWork05}
        />
       </WeekPage>

    );
}