import { useContext, useState } from 'react';
import { SurveyContext } from '../SurveyContext';
import { QUESTION_TYPES } from '../surveyReducer';
import styles from '../StudentWork.module.css';

// Question Creation Dialog Component
export function QuestionDialog({ selectedType, onClose }) {
  const { dispatch } = useContext(SurveyContext);
  const [questionText, setQuestionText] = useState('');
  const [options, setOptions] = useState([]);
  const [newOption, setNewOption] = useState('');

  const handleSave = () => {
    if (questionText.trim()) {
      const payload = {
        type: selectedType,
        question: questionText.trim(),
      };

      // Add options for multiple choice questions
      if (selectedType === QUESTION_TYPES.MULTIPLE_CHOICE) {
        const allOptions = [...options];
        // Include newOption if it has content
        if (newOption.trim()) {
          allOptions.push(newOption.trim());
        }
        payload.options = allOptions.filter((opt) => opt.trim());
      }

      dispatch({
        type: 'ADD_QUESTION',
        payload: payload,
      });
      onClose();
    }
  };

  const addOption = () => {
    if (newOption.trim()) {
      setOptions([...options, newOption.trim()]);
      setNewOption('');
    }
  };

  const removeOption = (index) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  const updateOption = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const formatQuestionType = (type) => {
    return type
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('-');
  };

  // Calculate if we have enough options for multiple choice
  const hasEnoughOptions = () => {
    if (selectedType !== QUESTION_TYPES.MULTIPLE_CHOICE) return true;
    const existingOptions = options.filter((opt) => opt.trim()).length;
    const pendingOption = newOption.trim() ? 1 : 0;
    const total = existingOptions + pendingOption;
    return total >= 2;
  };

  const isFormValid = questionText.trim() && hasEnoughOptions();

  return (
    <div className={styles['dialog-overlay']}>
      <div className={styles['dialog-content']}>
        <h3>Create {formatQuestionType(selectedType)} Question</h3>

        <div className={styles['dialog-form']}>
          <label htmlFor="question-input">Question Text:</label>
          <textarea
            id="question-input"
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            placeholder="Enter your question here..."
            className={styles['question-input']}
            rows={3}
            autoFocus
          />

          {/* Options section for multiple choice questions */}
          {selectedType === QUESTION_TYPES.MULTIPLE_CHOICE && (
            <div className={styles['options-creation']}>
              <label>Answer Options:</label>

              {options.map((option, index) => (
                <div key={index} className={styles['option-input-row']}>
                  <input
                    type="text"
                    value={option}
                    onChange={(e) => updateOption(index, e.target.value)}
                    placeholder={`Option ${index + 1}`}
                    className={styles['option-input']}
                  />
                  {options.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeOption(index)}
                      className={styles['remove-option-btn']}
                    >
                      ×
                    </button>
                  )}
                </div>
              ))}

              <div className={styles['add-option-row']}>
                <input
                  type="text"
                  value={newOption}
                  onChange={(e) => setNewOption(e.target.value)}
                  placeholder="Add new option..."
                  className={styles['option-input']}
                  onKeyUp={(e) => e.key === 'Enter' && addOption()}
                />
                <button
                  type="button"
                  onClick={addOption}
                  disabled={!newOption.trim()}
                  className={styles['add-option-btn']}
                >
                  Add
                </button>
              </div>
            </div>
          )}
        </div>

        <div className={styles['dialog-actions']}>
          <button
            onClick={handleSave}
            className={styles['save-btn']}
            disabled={!isFormValid}
          >
            Create Question
          </button>
          <button onClick={onClose} className={styles['cancel-btn']}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
