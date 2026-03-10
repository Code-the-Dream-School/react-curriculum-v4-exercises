import ExerciseSection from '../../exercises/exerciseSection';
import StudentWork10 from '../../exercises/lesson-10/studentWork';
import LessonPage from './LessonPage.jsx';

export default function Lesson10() {
  return (
    <LessonPage>
      <ExerciseSection
        title="Lesson 10 - Navigating with React Router"
        lesson="10"
        StudentWork={StudentWork10}
      />
    </LessonPage>
  );
}
