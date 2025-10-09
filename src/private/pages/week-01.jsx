//page shell for each week 
//will hold error boundary for lessons in the future
//will hold weeks files and directions 

import React from 'react';
import Directions from '../../exercises/week-01/directions';
import StudentWork from '../../exercises/week-01/file1';

export default function Week01() {
    return (
        <div>
            <section>
                <Directions />
            </section>
            <section>
                <StudentWork/>
            </section>
        </div>

    );


    
}