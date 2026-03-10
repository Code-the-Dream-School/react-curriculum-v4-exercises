import Styles from '../../styles/lesson-exercises.module.css';
import LessonDropdown from './lessonDropdown.jsx';

export default function LessonExercises() {
  return (
    <section className={Styles.section}>
      <div className={Styles.container}>
        <h2 className={Styles.title}>Lesson Exercises</h2>
        <p className={Styles.description}>
          Practice your React skills with our lesson exercises to reinforce your
          learing and build the confidence you need to succeed as a developer.
        </p>
        <LessonDropdown buttonLabel="Select a lesson" />
      </div>
    </section>
  );
}
