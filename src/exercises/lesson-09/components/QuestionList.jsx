import { useContext } from 'react';
import { SurveyContext } from '../SurveyContext';
import { QuestionItem } from './QuestionItem';
import styles from '../StudentWork.module.css';

// Question List Component
export function QuestionList() {
  const { state } = useContext(SurveyContext);

  return (
    <div className={styles['question-list']}>
      <h2>Questions</h2>
      {state.questions.map((question) => (
        <QuestionItem key={question.id} question={question} />
      ))}
    </div>
  );
}
