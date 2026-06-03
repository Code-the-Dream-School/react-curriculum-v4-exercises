import { useContext, useState } from 'react';
import { SurveyContext } from '../SurveyContext';
import { QUESTION_TYPES } from '../surveyReducer';
import styles from '../StudentWork.module.css';

export function QuestionItem({ question }) {
  const [workingText, setWorkingText] = useState(question.question);
  const { state, dispatch } = useContext(SurveyContext);

  const isEditing = state.ui.editingQuestionId === question.id;

  const formatQuestionType = (type) => {
    return type
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('-');
  };

  const handleEdit = () => {
    if (isEditing) {
      dispatch({
        type: 'SET_EDITING_QUESTION',
        payload: { questionId: null },
      });
    } else {
      setWorkingText(question.question);
      dispatch({
        type: 'SET_EDITING_QUESTION',
        payload: { questionId: question.id },
      });
    }
  };

  const handleSave = () => {
    dispatch({
      type: 'UPDATE_QUESTION_TEXT',
      payload: {
        id: question.id,
        newText: workingText,
      },
    });

    dispatch({
      type: 'SET_EDITING_QUESTION',
      payload: { questionId: null },
    });
  };

  const handleDelete = () => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this question?'
    );

    if (confirmed) {
      dispatch({
        type: 'DELETE_QUESTION',
        payload: {
          id: question.id,
        },
      });
    }
  };

  const handleAddOption = () => {
    const optionText = window.prompt('Enter new option text:');

    if (optionText && optionText.trim() !== '') {
      dispatch({
        type: 'ADD_OPTION_TO_QUESTION',
        payload: {
          questionId: question.id,
          optionText: optionText.trim(),
        },
      });
    }
  };

  const handleUpdateOption = (optionIndex, currentOption) => {
    const newText = window.prompt('Edit option text:', currentOption);

    if (newText && newText.trim() !== '') {
      dispatch({
        type: 'UPDATE_OPTION_TEXT',
        payload: {
          questionId: question.id,
          optionIndex,
          newText: newText.trim(),
        },
      });
    }
  };

  const handleDeleteOption = (optionIndex) => {
    dispatch({
      type: 'DELETE_OPTION_FROM_QUESTION',
      payload: {
        questionId: question.id,
        optionIndex,
      },
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

      <div className={styles['question-content']}>
        {isEditing ? (
          <div>
            <input
              type="text"
              value={workingText}
              onChange={(event) => setWorkingText(event.target.value)}
            />

            <button onClick={handleSave}>Save</button>

            <button onClick={handleEdit}>Cancel</button>
          </div>
        ) : (
          <h3>{question.question}</h3>
        )}
      </div>

      {question.type === QUESTION_TYPES.MULTIPLE_CHOICE && (
        <div className={styles['options-section']}>
          <h4>Answer Options:</h4>

          <ul>
            {question.options.map((option, index) => (
              <li key={index} className={styles['option-item']}>
                <span className={styles['option-text']}>{option}</span>

                {isEditing && (
                  <>
                    <button
                      type="button"
                      onClick={() => handleUpdateOption(index, option)}
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      disabled={question.options.length <= 2}
                      onClick={() => handleDeleteOption(index)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>

          {isEditing && (
            <button type="button" onClick={handleAddOption}>
              + Add Option
            </button>
          )}
        </div>
      )}
    </div>
  );
}
