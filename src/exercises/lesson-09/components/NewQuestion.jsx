import { useState } from 'react';
import { QUESTION_TYPES, QUESTION_TYPE_LABELS } from '../surveyReducer';
import { QuestionDialog } from './QuestionDialog';
import styles from '../StudentWork.module.css';

// Add Question Component
export function NewQuestion() {
  const [showDialog, setShowDialog] = useState(false);
  const [selectedType, setSelectedType] = useState('');

  const openDialog = (type) => {
    setSelectedType(type);
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
    setSelectedType('');
  };

  return (
    <>
      <div className={styles['add-question']}>
        <h3>Add New Question</h3>
        <div className={styles['question-type-buttons']}>
          <button onClick={() => openDialog(QUESTION_TYPES.TEXT)}>
            {QUESTION_TYPE_LABELS[QUESTION_TYPES.TEXT]}
          </button>
          <button onClick={() => openDialog(QUESTION_TYPES.MULTIPLE_CHOICE)}>
            {QUESTION_TYPE_LABELS[QUESTION_TYPES.MULTIPLE_CHOICE]}
          </button>
          <button onClick={() => openDialog(QUESTION_TYPES.YES_NO)}>
            {QUESTION_TYPE_LABELS[QUESTION_TYPES.YES_NO]}
          </button>
          <button onClick={() => openDialog(QUESTION_TYPES.RATING)}>
            {QUESTION_TYPE_LABELS[QUESTION_TYPES.RATING]}
          </button>
        </div>
      </div>

      {/* Question Creation Dialog */}
      {showDialog && (
        <QuestionDialog selectedType={selectedType} onClose={closeDialog} />
      )}
    </>
  );
}
