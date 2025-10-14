//will hold error boundary for lessons in the future
//will hold weeks files and directions 

import ExerciseSection from '../../exercises/exerciseSection';
import StudentWork from '../../exercises/week-08/studentWork';
import Directions from '../../exercises/week-08/directions';

export default function Week08() {
    return (
       <ExerciseSection
        title = "Week 08 - "
        Directions = {Directions}
        StudentWork = {StudentWork}
       />

    );
}