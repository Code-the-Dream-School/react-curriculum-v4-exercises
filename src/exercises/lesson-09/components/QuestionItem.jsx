import { useContext, useState } from 'react';
import { SurveyContext } from '../SurveyContext';
import { QUESTION_TYPES } from '../surveyReducer';
import styles from '../StudentWork.module.css';

// Question Item Component - Students will add Edit/Delete functionality here
export function QuestionItem({ question }) {
  //HINT: use these with controlled form
  const [workingText, setWorkingText] = useState(question.question);
  const { state, dispatch } = useContext(SurveyContext);
  const [editingOptionIdx, setEditingOptionIdx] = useState(null); //Tracks the index of the option being edited (null means no option is being edited)
  const [workingOptionText, setWorkingOptionText] = useState(''); // Holds the text of the option while typing

  const isEditingThisQuestion = state.ui.editingQuestionId === question.id; //(null === question.id)->false
  // isEditingThisQuestion is a Boolean (true or false), Not null.
  // state.ui.editingQuestionId: This is the raw value inside your global state. Its initial value is null. isEditingThisQuestion: This is a comparison helper you write inside your component:const isEditingThisQuestion = state.ui.editingQuestionId === question.id;
  // Because it uses the strict equality operator (===), isEditingThisQuestion can only ever be true or false.When the app first loads:state.ui.editingQuestionId (null)} === question.id (e.g., 12)->false

  // Helper function to convert type to title case
  const formatQuestionType = (type) => {
    return type
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('-');
  };

  // TODO: Students will add edit functionality here
  const handleEdit = () => {
    console.log('TODO: Implement edit functionality');
    // Hint: Use SET_EDITING_QUESTION action
    // If already editing, clicking cancel sets editing Id back to null/Shows "Cancel" when editing that question
    if (isEditingThisQuestion) {
      dispatch({
        type: 'SET_EDITING_QUESTION',
        payload: null,
      });
      setWorkingText(question.question); // Reset the input text back to the original question text
    } else {
      dispatch({
        // If not editing, set this question's id as the one being edited//Shows "Edit" when not editing
        type: 'SET_EDITING_QUESTION',
        payload: question.id,
      });
    }
  };

  // TODO: Students will add save functionality here
  const handleSave = () => {
    console.log('TODO: Implement save functionality');
    // Hint: Use UPDATE_QUESTION_TEXT action with workingText
    dispatch({
      //Has "Save" button that dispatches `UPDATE_QUESTION_TEXT`
      type: 'UPDATE_QUESTION_TEXT',
      payload: {
        id: question.id,
        newText: workingText, //Shows current question text in input field
      },
    });
    dispatch({
      //Has "Cancel" button that dispatches `SET_EDITING_QUESTION` with null ID/turn off edit mode
      type: 'SET_EDITING_QUESTION',
      payload: null,
    });
  };

  // TODO: Students will add delete functionality here
  const handleDelete = () => {
    console.log('TODO: Implement delete functionality');
    // Hint: Show confirmation dialog, then use DELETE_QUESTION action
    const confirmed = window.confirm(
      'Are you sure you want to delete this question?'
    );
    if (confirmed) {
      dispatch({
        type: 'DELETE_QUESTION',
        payload: question.id,
      });
    }
  };

  // UPDATE OPTION TEXT / "Save" button that dispatches `UPDATE_OPTION_TEXT`
  const handleUpdateOption = (index) => {
    //Show each existing option with inline edit capability
    dispatch({
      type: 'UPDATE_OPTION_TEXT',
      payload: {
        questionId: question.id,
        optionIndex: index,
        newText: workingOptionText, //- Input field with current option text
      },
    });
    setEditingOptionIdx(null); // Close option edit mode after saving
  };

  // 2. DELETE OPTION FROM QUESTION / "Delete" button that dispatches `DELETE_OPTION_FROM_QUESTION`
  const handleDeleteOption = (index) => {
    dispatch({
      type: 'DELETE_OPTION_FROM_QUESTION',
      payload: {
        questionId: question.id,
        optionIndex: index,
      },
    });
  };

  // 3. ADD OPTION TO QUESTION / Add "+ Add Option" button that dispatches `ADD_OPTION_TO_QUESTION`
  const handleAddOption = () => {
    const newOptionText = window.prompt(
      'Enter the text for the new answer option:'
    ); //Use simple `prompt()` or inline input for new option text
    // Only dispatch if the user didn't leave it empty or hit cancel
    if (newOptionText && newOptionText.trim() !== '') {
      dispatch({
        type: 'ADD_OPTION_TO_QUESTION',
        payload: {
          questionId: question.id,
          optionText: newOptionText.trim(),
        },
      });
    }
  };
  return (
    <div className={styles['question-item']}>
      <div className={styles['question-header']}>
        <span className={styles['question-type']}>
          Question Type: {formatQuestionType(question.type)}
        </span>
        <div className={styles['question-actions']}>
          {/* TODO: Students add Edit and Delete buttons here */}
          {/* Dynamically toggles button text between Edit and Cancel */}
          <button className={styles['edit-btn']} onClick={handleEdit}>
            {isEditingThisQuestion ? 'Cancel' : 'Edit'}
          </button>

          {/* Only renders the Save button when actively editing this question */}
          {isEditingThisQuestion && (
            <button className={styles['save-btn']} onClick={handleSave}>
              Save
            </button>
          )}

          <button className={styles['delete-btn']} onClick={handleDelete}>
            Delete (TODO)
          </button>
        </div>
      </div>

      {/* TODO: Students will add conditional controlled form to edit question here */}
      <div className={styles['question-content']}>
        {isEditingThisQuestion ? (
          <input
            type="text"
            value={workingText}
            onChange={function (e) {
              setWorkingText(e.target.value);
            }}
            className={styles['edit-input']}
          />
        ) : (
          <h3>{question.question}</h3>
        )}
      </div>

      {question.type === QUESTION_TYPES.MULTIPLE_CHOICE && (
        <div className={styles['options-section']}>
          <h4>Answer Options:</h4>
          <ul>
            {question.options.map((option, index) => {
              const isEditingThisOption = editingOptionIdx === index;

              return (
                <li key={index} className={styles['option-item']}>
                  {/*  --- Mode A: Inline Option Editing Form --- */}
                  {isEditingThisOption ? (
                    <div className={styles['option-edit-row']}>
                      <input
                        type="text"
                        value={workingOptionText}
                        onChange={function (e) {
                          setWorkingOptionText(e.target.value);
                        }}
                      />
                      <button
                        type="button"
                        onClick={function () {
                          handleUpdateOption(index);
                        }}
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        onClick={function () {
                          setEditingOptionIdx(null);
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    /* --- Mode B: Regular Choice Display --- */
                    <>
                      <span className={styles['option-text']}>{option}</span>
                      <div className={styles['option-actions']}>
                        <button
                          type="button"
                          onClick={function () {
                            setEditingOptionIdx(index);
                            setWorkingOptionText(option);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={function () {
                            handleDeleteOption(index);
                          }}
                          disabled={question.options.length <= 2} // Disables button if 2 or fewer options remain
                        >
                          Delete
                        </button>
                      </div>
                    </>
                  )}
                </li>
              );
            })}
          </ul>
          {/* --- Add Option Button --- */}
          <button
            type="button"
            className={styles['add-option-btn']}
            onClick={handleAddOption}
          >
            + Add Option
          </button>
        </div>
      )}
    </div>
  );
}
