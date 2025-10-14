// //will hold error boundary for lessons in the future
// //will hold weeks files and directions 

import React from 'react';
import ExerciseSection from '../../exercises/exerciseSection';
import StudentWork from '../../exercises/week-11/studentWork';
import Directions from '../../exercises/week-11/directions';

export default function Week11() {
    return (
       <ExerciseSection
        title = "Week 11 - "
        Directions = {Directions}
        StudentWork = {StudentWork}
       />

    );
}