import { useContext, useState } from 'react';
import { SurveyContext } from '../SurveyContext';
import styles from '../StudentWork.module.css';

// Survey Header Component
export function SurveyHeader() {
  const { state, dispatch } = useContext(SurveyContext);
  const [isEditing, setIsEditing] = useState(false);
  const [tempTitle, setTempTitle] = useState(state.survey.title);

  const handleSave = () => {
    dispatch({ type: 'UPDATE_SURVEY_TITLE', payload: { title: tempTitle } });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempTitle(state.survey.title);
    setIsEditing(false);
  };

  return (
    <div className={styles['survey-header']}>
      {isEditing ? (
        <div className={styles['title-edit']}>
          <input
            type="text"
            value={tempTitle}
            onChange={(e) => setTempTitle(e.target.value)}
            className={styles['title-input']}
          />
          <div className={styles['title-actions']}>
            <button onClick={handleSave} className={styles['save-btn']}>
              Save
            </button>
            <button onClick={handleCancel} className={styles['cancel-btn']}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className={styles['title-display']}>
          <h1>{state.survey.title}</h1>
          <button
            onClick={() => setIsEditing(true)}
            className={styles['edit-btn']}
          >
            Edit Title
          </button>
        </div>
      )}
      <p className={styles['survey-description']}>{state.survey.description}</p>

      <div className={styles['mode-toggle']}>
        <button
          onClick={() => dispatch({ type: 'TOGGLE_PREVIEW_MODE' })}
          className={`${styles['mode-btn']} ${state.ui.isPreviewMode ? styles['active'] : ''}`}
        >
          {state.ui.isPreviewMode ? 'Back to Edit' : 'Preview Survey'}
        </button>
      </div>
    </div>
  );
}
