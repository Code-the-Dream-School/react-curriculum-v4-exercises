import ExerciseSection from '../../exercises/exerciseSection';
import StudentWork05 from '../../exercises/lesson-05/studentWork';
import LessonPage from './LessonPage.jsx';

export default function Lesson05() {
  return (
    <LessonPage>
      <ExerciseSection
        title="Lesson 05 - Controlled Components and Forms"
        lesson="05"
        StudentWork={StudentWork05}
      />
    </LessonPage>
  );
}
