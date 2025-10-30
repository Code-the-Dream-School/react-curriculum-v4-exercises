//will hold error boundary for lessons in the future
//will hold weeks files and directions 

import ExerciseSection from '../../exercises/exerciseSection';
import StudentWork07 from '../../exercises/week-07/studentWork';
import WeekPage from './WeekPage.jsx';

export default function Week07() {
   return(
    <WeekPage>
        <ExerciseSection
        title="Week 07 - "
        week="07"
        StudentWork={StudentWork07}
        />
    </WeekPage>
   )
}