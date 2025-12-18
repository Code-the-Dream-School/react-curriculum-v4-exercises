import Styles from '../../styles/weekly-exercises.module.css';
import WeekDropdown from './weekDropdown.jsx';

export default function WeeklyExercises() {
  return (
    <section className={Styles.section}>
      <div className={Styles.container}>
        <h2 className={Styles.title}>Weekly Exercises</h2>
        <p className={Styles.description}>
          Practice your React skills with our weekly execises to reinforce your
          learing and build the confidence you need to succeed as a developer.
        </p>
        <WeekDropdown buttonLabel="Select a weekly lesson" />
      </div>
    </section>
  );
}
