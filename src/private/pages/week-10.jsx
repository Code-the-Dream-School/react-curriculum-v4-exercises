//will hold error boundary for lessons in the future
//will hold weeks files and directions 

import ExerciseSection from '../../exercises/exerciseSection';
import StudentWork from '../../exercises/week-10/studentWork';
import Directions from '../../exercises/week-10/directions';

export default function Week10() {
    return (
       <ExerciseSection
        title = "Week 10 - "
        Directions = {Directions}
        StudentWork = {StudentWork}
       />

    );
}