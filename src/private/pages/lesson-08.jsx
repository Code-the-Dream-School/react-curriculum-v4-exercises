import ExerciseSection from '../../exercises/exerciseSection';
import StudentWork08 from '../../exercises/lesson-08/studentWork';
import LessonPage from './LessonPage.jsx';

export default function Lesson08() {
  return (
    <LessonPage>
      <ExerciseSection
        title="Lesson 08 - Optimizing with Advanced Hooks"
        lesson="08"
        StudentWork={StudentWork08}
      />
    </LessonPage>
  );
}
