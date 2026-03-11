import ExerciseSection from '../../exercises/exerciseSection';
import StudentWork09 from '../../exercises/lesson-09/studentWork';
import LessonPage from './LessonPage.jsx';

export default function Lesson09() {
  return (
    <LessonPage>
      <ExerciseSection
        title="Lesson 09 - Managing Global State with Context"
        lesson="09"
        StudentWork={StudentWork09}
      />
    </LessonPage>
  );
}
