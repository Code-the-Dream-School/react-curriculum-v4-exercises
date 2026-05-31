// =========================================================================
// 🗂️ QUICK REFERENCE: SURVEY VARIABLE BLUEPRINT
// =========================================================================
// 1. THE DATA:
//    - state.questions         -> The entire list (array) of questions.
//    - question.question       -> The actual text string of a single question.
//    - workingText             -> Local state holding the temporary text being edited.
//
// 2. THE TRACKER (State):
//    - state.ui.editingQuestionId -> Global state holding the ID of the active question
//                                    being edited (or null if none).
//
// 3. THE LETTER (Action Payload):
//    - { questionId: id }      -> The exact object structure the reducer expects.
//    - action.payload.questionId -> How the reducer reads that object.
// =========================================================================

import { useContext, useState } from 'react';
import { SurveyContext } from '../SurveyContext';
import { QUESTION_TYPES } from '../surveyReducer';
import styles from '../StudentWork.module.css';

// Question Item Component - Students will add Edit/Delete functionality here
export function QuestionItem({ question }) {
  //HINT: use these with controlled form
  const [workingText, setWorkingText] = useState(
    question.question
  );

  const { state, dispatch } = useContext(SurveyContext);
  const { editingQuestionId } = state.ui;

  // Helper function to convert type to title case
  const formatQuestionType = (type) => {
    return type
      .split('-')
      .map(
        (word) =>
          word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join('-');
  };

  // TODO: Students will add edit functionality here
  const handleEdit = (id) => {
    console.log('TODO: Implement edit functionality');
    const currentQuestion = state.questions.find(
      (q) => q.id === id
    );
    // If the question we clicked IS NOT already the active one...
    if (state.ui.editingQuestionId !== id) {
      setWorkingText(currentQuestion.question);
      dispatch({
        type: 'SET_EDITING_QUESTION',
        payload: { questionId: id },
      });
    } else {
      // Otherwise we send null to the tracker, effectively clearing it
      dispatch({
        type: 'SET_EDITING_QUESTION',
        payload: { questionId: null },
      });
    }
  };

  // TODO: Students will add save functionality here
  const handleSave = (id, workingText) => {
    console.log('TODO: Implement save functionality');
    // update the current question workingText in the data array
    dispatch({
      type: 'UPDATE_QUESTION_TEXT',
      payload: {
        questionId: id,
        question: workingText,
      },
    });
    // reset the id to null in order to close the editor
    dispatch({
      type: 'SET_EDITING_QUESTION',
      payload: { questionId: null },
    });
  };

  // TODO: Students will add delete functionality here
  const handleDelete = (id) => {
    console.log('TODO: Implement delete functionality');
    window.confirm(
      'Are you sure you want to delete this question?'
    ) &&
      dispatch({
        type: 'DELETE_QUESTION',
        payload: { questionId: id },
      });
  };

  return (
    <div className={styles['question-item']}>
      <div className={styles['question-header']}>
        <span className={styles['question-type']}>
          Question Type: {formatQuestionType(question.type)}
        </span>
        <div className={styles['question-actions']}>
          {/* TODO: Students add Edit and Delete buttons here */}
          <button
            className={styles['edit-btn']}
            onClick={() => handleEdit(question.id)}
          >
            {state.ui.editingQuestionId !== question.id
              ? 'Edit'
              : 'Cancel'}
          </button>
          <button
            className={styles['delete-btn']}
            onClick={() => handleDelete(question.id)}
          >
            Delete (TODO)
          </button>
        </div>
      </div>

      {/* TODO: Students will add conditional controlled form to edit question here */}
      {state.ui.editingQuestionId === question.id ? (
        // truthy condition
        <form>
          <input
            type="text"
            value={workingText}
            onChange={(e) => setWorkingText(e.target.value)}
          />
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              handleSave(editingQuestionId, workingText);
            }}
          >
            Save
          </button>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              handleDelete(editingQuestionId);
            }}
          >
            Delete
          </button>
        </form>
      ) : (
        // falsy condition
        <div className={styles['question-content']}>
          <h3>{question.question}</h3>
          <button>Cancel</button>
        </div>
      )}
      {/* MULTIPLE CHOICE HERE */}
      {question.type === QUESTION_TYPES.MULTIPLE_CHOICE && (
        <div className={styles['options-section']}>
          <h4>Answer Options:</h4>
          <ul>
            {question.options.map((option, index) => {
              const isEditing =
                state.ui.editingQuestionId === question.id;

              return isEditing ? (
                <li
                  key={index}
                  className={styles['option-item']}
                >
                  <input
                    type="text"
                    id={`option-input-${index}`}
                    defaultValue={option}
                    className={styles['option-input']}
                  />
                  <button
                    type="button"
                    className={styles['save-option-btn']}
                    onClick={() => {
                      const inputElement =
                        document.getElementById(
                          `option-input-${index}`
                        );
                      if (inputElement) {
                        dispatch({
                          type: 'UPDATE_OPTION_TEXT',
                          payload: {
                            questionId: question.id,
                            optionIndex: index,
                            newText: inputElement.value,
                          },
                        });
                      }
                    }}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className={styles['delete-option-btn']}
                    disabled={question.options.length <= 2}
                    onClick={() =>
                      dispatch({
                        type: 'DELETE_OPTION_FROM_QUESTION',
                        payload: {
                          questionId: question.id,
                          optionIndex: index,
                        },
                      })
                    }
                  >
                    Delete
                  </button>
                </li>
              ) : (
                <li
                  key={index}
                  className={styles['option-item']}
                >
                  <span className={styles['option-text']}>
                    {option}
                  </span>
                </li>
              );
            })}
          </ul>
          {state.ui.editingQuestionId === question.id && (
            <button
              onClick={() => {
                const userOptionString = prompt(
                  'Enter the new option text:'
                );
                if (userOptionString) {
                  dispatch({
                    type: 'ADD_OPTION_TO_QUESTION',
                    payload: {
                      questionId: question.id,
                      userOptionString: userOptionString,
                    },
                  });
                }
              }}
            >
              + Add Option
            </button>
          )}
        </div>
      )}
    </div>
  );
}
