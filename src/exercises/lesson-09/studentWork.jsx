import { SurveyProvider } from './SurveyContext';
import { SurveyBuilder } from './components/SurveyBuilder';
import styles from './StudentWork.module.css';

// Main Export - StudentWork Component
export default function StudentWork() {
  return (
    <SurveyProvider>
      <div className={styles['student-work']}>
        <SurveyBuilder />
      </div>
    </SurveyProvider>
  );
}
