import LessonPage from './LessonPage.jsx';
import ExerciseSection from '../../exercises/exerciseSection';
import StudentWork02 from '../../exercises/lesson-02/studentWork';

export default function Lesson02() {
  return (
    <LessonPage>
      <ExerciseSection
        title="Lesson 02 - Building with ReactDOM and Components "
        lesson="02"
        StudentWork={StudentWork02}
      />
    </LessonPage>
  );
}
