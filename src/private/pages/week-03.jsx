//will hold error boundary for lessons in the future
//will hold weeks files and directions 

import ExerciseSection from '../../exercises/exerciseSection';
import StudentWork03 from '../../exercises/week-03/studentWork';
import WeekPage from './WeekPage';

export default function Week03() {
    return (
     <WeekPage>
              <ExerciseSection 
                title="Week 03 -"
                week="03"
                StudentWork={StudentWork03}
              />
            </WeekPage>

    );
}