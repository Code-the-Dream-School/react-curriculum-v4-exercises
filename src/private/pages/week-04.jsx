//will hold error boundary for lessons in the future
//will hold weeks files and directions 

import ExerciseSection from '../../exercises/exerciseSection';
import StudentWork from '../../exercises/week-04/studentWork';
import WeekPage from './WeekPage.jsx';

export default function Week04() {
    return (
       <WeekPage>
        <ExerciseSection
        title="Week 04 - "
        week="04"
        StudentWork={StudentWork}
        />
       </WeekPage>

    );
}