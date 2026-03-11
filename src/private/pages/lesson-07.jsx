import ExerciseSection from '../../exercises/exerciseSection';
import StudentWork07 from '../../exercises/lesson-07/studentWork';
import LessonPage from './LessonPage.jsx';

export default function Lesson07() {
  return (
    <LessonPage>
      <ExerciseSection
        title="Lesson 07 - Fetching and Displaying Data"
        lesson="07"
        StudentWork={StudentWork07}
      />
    </LessonPage>
  );
}
