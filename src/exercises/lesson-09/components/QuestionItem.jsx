import { useContext, useEffect, useState } from 'react';
import { SurveyContext } from '../SurveyContext';
import { QUESTION_TYPES } from '../surveyReducer';
import styles from '../StudentWork.module.css';

export function QuestionItem({ question }) {
  const { state, dispatch } = useContext(SurveyContext);

  const isEditing = state.ui.editingQuestionId === question.id;

  const [workingText, setWorkingText] = useState(question.question);
  const [optionDrafts, setOptionDrafts] = useState(question.options || []);
  const [newOptionText, setNewOptionText] = useState('');

  useEffect(() => {
    setWorkingText(question.question);
    setOptionDrafts(question.options || []);
  }, [question.question, question.options]);

  const formatQuestionType = (type) =>
    type
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('-');

  function handleEdit() {
    setWorkingText(question.question);
    setOptionDrafts(question.options || []);

    dispatch({
      type: 'SET_EDITING_QUESTION',
      payload: { questionId: question.id },
    });
  }

  function handleCancelEdit() {
    setWorkingText(question.question);
    setOptionDrafts(question.options || []);
    setNewOptionText('');

    dispatch({
      type: 'SET_EDITING_QUESTION',
      payload: { questionId: null },
    });
  }

  function handleSaveQuestionText() {
    const trimmedText = workingText.trim();

    if (!trimmedText) {
      return;
    }

    dispatch({
      type: 'UPDATE_QUESTION_TEXT',
      payload: {
        id: question.id,
        newText: trimmedText,
      },
    });
  }

  function handleDelete() {
    const shouldDelete = window.confirm(
      'Are you sure you want to delete this question?'
    );

    if (!shouldDelete) {
      return;
    }

    dispatch({
      type: 'DELETE_QUESTION',
      payload: { id: question.id },
    });
  }

  function handleOptionDraftChange(index, value) {
    setOptionDrafts((previousDrafts) =>
      previousDrafts.map((option, optionIndex) =>
        optionIndex === index ? value : option
      )
    );
  }

  function handleSaveOption(index) {
    const trimmedOption = optionDrafts[index].trim();

    if (!trimmedOption) {
      return;
    }

    dispatch({
      type: 'UPDATE_OPTION_TEXT',
      payload: {
        questionId: question.id,
        optionIndex: index,
        newText: trimmedOption,
      },
    });
  }

  function handleDeleteOption(index) {
    if (question.options.length <= 2) {
      return;
    }

    dispatch({
      type: 'DELETE_OPTION_FROM_QUESTION',
      payload: {
        questionId: question.id,
        optionIndex: index,
      },
    });
  }

  function handleAddOption() {
    const trimmedOption = newOptionText.trim();

    if (!trimmedOption) {
      return;
    }

    dispatch({
      type: 'ADD_OPTION_TO_QUESTION',
      payload: {
        questionId: question.id,
        optionText: trimmedOption,
      },
    });

    setNewOptionText('');
  }

  return (
    <div className={styles['question-item']}>
      <div className={styles['question-header']}>
        <span className={styles['question-type']}>
          Question Type: {formatQuestionType(question.type)}
        </span>

        <div className={styles['question-actions']}>
          {isEditing ? (
            <button className={styles['edit-btn']} onClick={handleCancelEdit}>
              Cancel
            </button>
          ) : (
            <button className={styles['edit-btn']} onClick={handleEdit}>
              Edit
            </button>
          )}

          <button className={styles['delete-btn']} onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>

      <div className={styles['question-content']}>
        {isEditing ? (
          <div>
            <label htmlFor={`question-${question.id}`}>
              Edit Question Text:
            </label>

            <textarea
              id={`question-${question.id}`}
              value={workingText}
              onChange={(event) => setWorkingText(event.target.value)}
              className={styles['question-input']}
              rows={3}
            />

            <div className={styles['title-actions']}>
              <button
                className={styles['save-btn']}
                onClick={handleSaveQuestionText}
                disabled={!workingText.trim()}
              >
                Save Question
              </button>

              <button
                className={styles['cancel-btn']}
                onClick={handleCancelEdit}
              >
                Cancel
              </button>
            </div>
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
              <li
                key={`${question.id}-${index}`}
                className={styles['option-item']}
              >
                {isEditing ? (
                  <>
                    <input
                      type="text"
                      value={optionDrafts[index] || ''}
                      onChange={(event) =>
                        handleOptionDraftChange(index, event.target.value)
                      }
                      className={styles['option-input']}
                    />

                    <div className={styles['option-actions']}>
                      <button
                        type="button"
                        className={styles['option-edit-btn']}
                        onClick={() => handleSaveOption(index)}
                        disabled={!optionDrafts[index]?.trim()}
                      >
                        Save
                      </button>

                      <button
                        type="button"
                        className={styles['option-delete-btn']}
                        onClick={() => handleDeleteOption(index)}
                        disabled={question.options.length <= 2}
                        title={
                          question.options.length <= 2
                            ? 'Multiple choice questions must have at least 2 options'
                            : 'Delete option'
                        }
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
            <div className={styles['add-option']}>
              <input
                type="text"
                value={newOptionText}
                onChange={(event) => setNewOptionText(event.target.value)}
                placeholder="Add a new option..."
              />

              <button
                type="button"
                onClick={handleAddOption}
                disabled={!newOptionText.trim()}
              >
                + Add Option
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
