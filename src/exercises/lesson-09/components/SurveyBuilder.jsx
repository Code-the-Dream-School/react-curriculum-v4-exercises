import { useContext } from 'react';
import { SurveyContext } from '../SurveyContext';
import { SurveyHeader } from './SurveyHeader';
import { QuestionList } from './QuestionList';
import { NewQuestion } from './NewQuestion';
import { SurveyPreview } from './SurveyPreview';
import styles from '../StudentWork.module.css';

// Main Survey Builder Component
export function SurveyBuilder() {
  const { state } = useContext(SurveyContext);

  return (
    <div className={styles['survey-builder']}>
      <SurveyHeader />

      {state.ui.isPreviewMode ? (
        <SurveyPreview />
      ) : (
        <div className={styles['edit-mode']}>
          <NewQuestion />
          <QuestionList />
        </div>
      )}
    </div>
  );
}
