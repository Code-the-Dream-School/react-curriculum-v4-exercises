import LessonPage from './LessonPage.jsx';
import ExerciseSection from '../../exercises/exerciseSection';
import StudentWork01 from '../../exercises/lesson-01/studentWork';

export default function Lesson01() {
  return (
    <LessonPage>
      <ExerciseSection
        title="Lesson 01 - Introduction to React"
        lesson="01"
        StudentWork={StudentWork01}
      />
    </LessonPage>
  );
}
