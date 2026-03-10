import ExerciseSection from '../../exercises/exerciseSection';
import StudentWork06 from '../../exercises/lesson-06/studentWork';
import LessonPage from './LessonPage.jsx';

export default function Lesson06() {
  return (
    <LessonPage>
      <ExerciseSection
        title="Lesson 06 - Writing Reusable Components"
        lesson="06"
        StudentWork={StudentWork06}
      />
    </LessonPage>
  );
}
