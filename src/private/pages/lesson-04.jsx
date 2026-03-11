import ExerciseSection from '../../exercises/exerciseSection';
import StudentWork04 from '../../exercises/lesson-04/studentWork';
import LessonPage from './LessonPage.jsx';

export default function Lesson04() {
  return (
    <LessonPage>
      <ExerciseSection
        title="Lesson 04 - React Lifecycle and Hooks Basics"
        lesson="04"
        StudentWork={StudentWork04}
      />
    </LessonPage>
  );
}
