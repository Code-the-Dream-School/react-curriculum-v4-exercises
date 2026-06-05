import { useContext, useState } from 'react';
import { SurveyContext } from '../SurveyContext';
import { QUESTION_TYPES } from '../surveyReducer';
import styles from '../StudentWork.module.css';

// Question Item Component - Students will add Edit/Delete functionality here
export function QuestionItem({ question }) {
  // HINT: use these with controlled form
  const [workingText, setWorkingText] = useState(question.question);
  const [optionEdits, setOptionEdits] = useState(question.options || []);
  const { state, dispatch } = useContext(SurveyContext);
  const isEditing = state.ui.editingQuestionId === question.id;

  // Helper function to convert type to title case
  const formatQuestionType = (type) => {
    return type
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('-');
  };

  const handleEdit = () => {
    if (!isEditing) {
      setWorkingText(question.question);
      setOptionEdits(question.options || []);
    }

    dispatch({
      type: 'SET_EDITING_QUESTION',
      payload: { questionId: isEditing ? null : question.id },
    });
  };

  const handleSave = () => {
    if (!workingText.trim()) {
      return;
    }

    dispatch({
      type: 'UPDATE_QUESTION_TEXT',
      payload: { id: question.id, newText: workingText.trim() },
    });
    dispatch({ type: 'SET_EDITING_QUESTION', payload: { questionId: null } });
  };

  const handleDelete = () => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this question?'
    );
    if (confirmed) {
      dispatch({ type: 'DELETE_QUESTION', payload: { id: question.id } });
    }
  };

  const handleAddOption = () => {
    const optionText = window.prompt('Enter new option text:');
    if (optionText && optionText.trim()) {
      dispatch({
        type: 'ADD_OPTION_TO_QUESTION',
        payload: { questionId: question.id, optionText: optionText.trim() },
      });
    }
  };

  const updateOptionEdit = (index, value) => {
    const updatedOptions = [...optionEdits];
    updatedOptions[index] = value;
    setOptionEdits(updatedOptions);
  };

  const handleOptionSave = (index) => {
    const newText = optionEdits[index]?.trim();
    if (!newText) return;

    dispatch({
      type: 'UPDATE_OPTION_TEXT',
      payload: {
        questionId: question.id,
        optionIndex: index,
        newText,
      },
    });
  };

  const handleOptionDelete = (index) => {
    dispatch({
      type: 'DELETE_OPTION_FROM_QUESTION',
      payload: { questionId: question.id, optionIndex: index },
    });
  };

  return (
    <div className={styles['question-item']}>
      <div className={styles['question-header']}>
        <span className={styles['question-type']}>
          Question Type: {formatQuestionType(question.type)}
        </span>
        <div className={styles['question-actions']}>
          <button className={styles['edit-btn']} onClick={handleEdit}>
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
          <button className={styles['delete-btn']} onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>

      {isEditing ? (
        <div className={styles['question-content']}>
          <textarea
            value={workingText}
            onChange={(e) => setWorkingText(e.target.value)}
            rows={3}
            className={styles['question-input']}
          />
          <div className={styles['title-actions']}>
            <button onClick={handleSave} className={styles['save-btn']}>
              Save
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: 'SET_EDITING_QUESTION',
                  payload: { questionId: null },
                })
              }
              className={styles['cancel-btn']}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className={styles['question-content']}>
          <h3>{question.question}</h3>
        </div>
      )}

      {question.type === QUESTION_TYPES.MULTIPLE_CHOICE && (
        <div className={styles['options-section']}>
          <h4>Answer Options:</h4>
          <ul>
            {question.options.map((option, index) => (
              <li key={index} className={styles['option-item']}>
                {isEditing ? (
                  <>
                    <input
                      type="text"
                      value={optionEdits[index] ?? option}
                      onChange={(e) => updateOptionEdit(index, e.target.value)}
                      className={styles['option-input']}
                    />
                    <div className={styles['option-actions']}>
                      <button
                        type="button"
                        className={styles['option-edit-btn']}
                        onClick={() => handleOptionSave(index)}
                        disabled={
                          !optionEdits[index] ||
                          optionEdits[index].trim() === option.trim()
                        }
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        className={styles['option-delete-btn']}
                        onClick={() => handleOptionDelete(index)}
                        disabled={question.options.length <= 2}
                      >
                        Delete
                      </button>
                    </div>
                  </>
                ) : (
                  <span className={styles['option-text']}>{option}</span>
                )}
              </li>
            ))}
          </ul>

          {isEditing && (
            <button
              type="button"
              className={styles['add-option-btn']}
              onClick={handleAddOption}
            >
              + Add Option
            </button>
          )}
        </div>
      )}
    </div>
  );
}
