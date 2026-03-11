// //will hold error boundary for lessons in the future
// //will hold lesson files and directions

import ExerciseSection from '../../exercises/exerciseSection';
import StudentWork11 from '../../exercises/lesson-11/studentWork';
import LessonPage from './LessonPage.jsx';

export default function Lesson11() {
  return (
    <LessonPage>
      <ExerciseSection
        title="Lesson 11 - Security and Deployment"
        lesson="11"
        StudentWork={StudentWork11}
      />
    </LessonPage>
  );
}
