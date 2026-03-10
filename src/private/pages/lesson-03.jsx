import ExerciseSection from '../../exercises/exerciseSection';
import StudentWork03 from '../../exercises/lesson-03/studentWork';
import LessonPage from './LessonPage';

export default function Lesson03() {
  return (
    <LessonPage>
      <ExerciseSection
        title="Lesson 03 - React Lifecycle and Hooks Basics"
        lesson="03"
        StudentWork={StudentWork03}
      />
    </LessonPage>
  );
}
