// src/private/components/studentOutput.jsx
import Styles from '../../styles/student-output.module.css';

export function StudentOutput({ title, lesson, children }) {
  return (
    <section className={Styles.outputSection}>
      <div className={Styles.outputCard}>
        <header className={Styles.outputHeader}>
          <h3>{title}</h3>
          {lesson && <p className={Styles.lessonTitle}>{lesson}</p>}
        </header>

        <div className={Styles.codeBox}>
          <div className={Styles.codeContent}>
            {children ?? <p className={Styles.empty}>No output yet.</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
