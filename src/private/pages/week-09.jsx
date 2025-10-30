//will hold error boundary for lessons in the future
//will hold weeks files and directions 

import ExerciseSection from '../../exercises/exerciseSection';
import StudentWork from '../../exercises/week-09/studentWork';
import WeekPage from './WeekPage.jsx';

export default function Week09() {
    return (
        <WeekPage>
            <ExerciseSection
            title="Week 09 - "
            week="09"
            StudentWork={StudentWork09}
            />
        </WeekPage>
    );
}