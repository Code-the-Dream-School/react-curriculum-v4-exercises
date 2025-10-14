//will hold error boundary for lessons in the future
//will hold weeks files and directions 

import ExerciseSection from '../../exercises/exerciseSection';
import StudentWork from '../../exercises/week-03/studentWork';
import Directions from '../../exercises/week-03/directions';

export default function Week02() {
    return (
       <ExerciseSection
        title = "Week 03 - "
        Directions = {Directions}
        StudentWork = {StudentWork}
       />

    );
}