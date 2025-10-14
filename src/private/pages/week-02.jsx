//will hold error boundary for lessons in the future
//will hold weeks files and directions 

import React from 'react';
import ExerciseSection from '../../exercises/exerciseSection';
import StudentWork from '../../exercises/week-02/studentWork';
import Directions from '../../exercises/week-02/directions';

export default function Week02() {
    return (
       <ExerciseSection
        title = "Week 02 - "
        Directions = {Directions}
        StudentWork = {StudentWork}
       />

    );
}