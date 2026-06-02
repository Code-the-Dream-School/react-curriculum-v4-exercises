// Helper function to generate unique IDs
export const generateId = () =>
  `q${Date.now()}${Math.random().toString(36).substring(2, 11)}`;

// Question type constants
export const QUESTION_TYPES = {
  TEXT: 'text',
  MULTIPLE_CHOICE: 'multiple-choice',
  YES_NO: 'yes-no',
  RATING: 'rating',
};

// Question type display labels
export const QUESTION_TYPE_LABELS = {
  [QUESTION_TYPES.TEXT]: 'Text Question',
  [QUESTION_TYPES.MULTIPLE_CHOICE]: 'Multiple Choice',
  [QUESTION_TYPES.YES_NO]: 'Yes/No',
  [QUESTION_TYPES.RATING]: 'Rating',
};

// Default question options for multiple choice
export const DEFAULT_MULTIPLE_CHOICE_OPTIONS = ['Option A'];

// Factory function to create new questions
//https://javascript.plainenglish.io/chapter-51-mastering-factory-functions-in-javascript-the-ultimate-guide-379bc2006895
const createNewQuestion = (payload, questionsLength) => ({
  id: generateId(),
  type: payload.type || QUESTION_TYPES.TEXT,
  question: payload.question || 'New Question',
  required: true,
  order: questionsLength,
  options:
    payload.options ||
    (payload.type === QUESTION_TYPES.MULTIPLE_CHOICE
      ? DEFAULT_MULTIPLE_CHOICE_OPTIONS
      : []),
});

export function surveyReducer(state, action) {
  switch (action.type) {
    // ===== MVP ACTIONS (ALREADY WORKING) =====

    case 'ADD_QUESTION':
      return {
        ...state,
        questions: [
          ...state.questions,
          createNewQuestion(action.payload, state.questions.length),
        ],
        survey: {
          ...state.survey,
          lastModified: new Date().toISOString().split('T')[0],
        },
      };

    case 'ADD_OPTION':
      return {
        ...state,
        questions: state.questions.map((q) =>
          q.id === action.payload.questionId
            ? { ...q, options: [...q.options, action.payload.option] }
            : q
        ),
      };

    case 'SET_EDITING_QUESTION':
      return {
        ...state,
        ui: {
          ...state.ui,
          editingQuestionId: action.payload.questionId,
        },
      };

    case 'UPDATE_SURVEY_TITLE':
      return {
        ...state,
        survey: {
          ...state.survey,
          title: action.payload.title,
          lastModified: new Date().toISOString().split('T')[0],
        },
      };

    case 'TOGGLE_PREVIEW_MODE':
      return {
        ...state,
        ui: {
          ...state.ui,
          isPreviewMode: !state.ui.isPreviewMode,
          editingQuestionId: null, // Clear editing when switching modes
        },
      };
    // ===== END MVP ACTIONS =========
    // ===== STUDENT IMPLEMENTATION TASKS =====

    case 'UPDATE_QUESTION_TEXT': {
      // Find question by id and update its text
      const { id, newText } = action.payload;
      return {
        ...state,
        questions: state.questions.map((q) =>
          q.id === id ? { ...q, question: newText } : q
        ),
      };
    }

    case 'DELETE_QUESTION': {
      const { id } = action.payload;
      const newQuestions = state.questions.filter((q) => q.id !== id);
      const isEditingDeleted = state.ui.editingQuestionId === id;
      return {
        ...state,
        questions: newQuestions,
        ui: {
          ...state.ui,
          editingQuestionId: isEditingDeleted
            ? null
            : state.ui.editingQuestionId,
        },
      };
    }

    case 'ADD_OPTION_TO_QUESTION': {
      const { questionId, optionText } = action.payload;
      return {
        ...state,
        questions: state.questions.map((q) => {
          if (
            q.id === questionId &&
            q.type === QUESTION_TYPES.MULTIPLE_CHOICE
          ) {
            return {
              ...q,
              options: [...q.options, optionText],
            };
          }
          return q;
        }),
      };
    }

    case 'UPDATE_OPTION_TEXT': {
      const { questionId, optionIndex, newText } = action.payload;
      return {
        ...state,
        questions: state.questions.map((q) => {
          if (q.id === questionId && Array.isArray(q.options)) {
            return {
              ...q,
              options: q.options.map((opt, idx) =>
                idx === optionIndex ? newText : opt
              ),
            };
          }
          return q;
        }),
      };
    }

    case 'DELETE_OPTION_FROM_QUESTION': {
      const { questionId, optionIndex } = action.payload;
      return {
        ...state,
        questions: state.questions.map((q) => {
          if (
            q.id === questionId &&
            Array.isArray(q.options) &&
            q.options.length > 2
          ) {
            return {
              ...q,
              options: q.options.filter((_, idx) => idx !== optionIndex),
            };
          }
          return q;
        }),
      };
    }

    default:
      return state;
  }
}
