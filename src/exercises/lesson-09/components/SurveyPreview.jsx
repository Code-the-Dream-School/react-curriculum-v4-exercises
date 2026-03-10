import { useContext } from 'react';
import { SurveyContext } from '../SurveyContext';
import { QUESTION_TYPES } from '../surveyReducer';
import styles from '../StudentWork.module.css';

// Survey Preview Component
export function SurveyPreview() {
  const { state } = useContext(SurveyContext);

  return (
    <div className={styles['survey-preview']}>
      <h2>Survey Preview</h2>
      <div className={styles['preview-content']}>
        <h1>{state.survey.title}</h1>
        <p>{state.survey.description}</p>

        {state.questions.map((question, index) => (
          <div key={question.id} className={styles['preview-question']}>
            <h3>
              {index + 1}. {question.question}
            </h3>

            {question.type === QUESTION_TYPES.TEXT && (
              <input type="text" placeholder="Your answer..." disabled />
            )}

            {question.type === QUESTION_TYPES.MULTIPLE_CHOICE && (
              <div>
                {question.options.map((option, idx) => (
                  <div key={idx}>
                    <input type="radio" name={`q${question.id}`} disabled />
                    <label>{option}</label>
                  </div>
                ))}
              </div>
            )}

            {question.type === QUESTION_TYPES.YES_NO && (
              <div>
                <input type="radio" name={`q${question.id}`} disabled />
                <label>Yes</label>
                <input type="radio" name={`q${question.id}`} disabled />
                <label>No</label>
              </div>
            )}

            {question.type === QUESTION_TYPES.RATING && (
              <div>
                {[1, 2, 3, 4, 5].map((rating) => (
                  <span key={rating} className={styles['rating-option']}>
                    {rating}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
