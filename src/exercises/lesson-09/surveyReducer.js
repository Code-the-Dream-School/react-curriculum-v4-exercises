export const generateId = () =>
  `q${Date.now()}${Math.random().toString(36).substring(2, 11)}`;

export const QUESTION_TYPES = {
  TEXT: 'text',
  MULTIPLE_CHOICE: 'multiple-choice',
  YES_NO: 'yes-no',
  RATING: 'rating',
};

export const QUESTION_TYPE_LABELS = {
  [QUESTION_TYPES.TEXT]: 'Text Question',
  [QUESTION_TYPES.MULTIPLE_CHOICE]: 'Multiple Choice',
  [QUESTION_TYPES.YES_NO]: 'Yes/No',
  [QUESTION_TYPES.RATING]: 'Rating',
};

export const DEFAULT_MULTIPLE_CHOICE_OPTIONS = ['Option A'];

const getTodayDate = () => new Date().toISOString().split('T')[0];

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
    case 'ADD_QUESTION':
      return {
        ...state,
        questions: [
          ...state.questions,
          createNewQuestion(action.payload, state.questions.length),
        ],
        survey: {
          ...state.survey,
          lastModified: getTodayDate(),
        },
      };

    case 'ADD_OPTION':
      return {
        ...state,
        questions: state.questions.map((question) =>
          question.id === action.payload.questionId
            ? {
                ...question,
                options: [...question.options, action.payload.option],
              }
            : question
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
          lastModified: getTodayDate(),
        },
      };

    case 'TOGGLE_PREVIEW_MODE':
      return {
        ...state,
        ui: {
          ...state.ui,
          isPreviewMode: !state.ui.isPreviewMode,
          editingQuestionId: null,
        },
      };

    case 'UPDATE_QUESTION_TEXT':
      return {
        ...state,
        questions: state.questions.map((question) =>
          question.id === action.payload.id
            ? {
                ...question,
                question: action.payload.newText,
              }
            : question
        ),
        survey: {
          ...state.survey,
          lastModified: getTodayDate(),
        },
        ui: {
          ...state.ui,
          editingQuestionId: null,
        },
      };

    case 'DELETE_QUESTION':
      return {
        ...state,
        questions: state.questions.filter(
          (question) => question.id !== action.payload.id
        ),
        survey: {
          ...state.survey,
          lastModified: getTodayDate(),
        },
        ui: {
          ...state.ui,
          editingQuestionId:
            state.ui.editingQuestionId === action.payload.id
              ? null
              : state.ui.editingQuestionId,
        },
      };

    case 'ADD_OPTION_TO_QUESTION':
      return {
        ...state,
        questions: state.questions.map((question) => {
          if (
            question.id !== action.payload.questionId ||
            question.type !== QUESTION_TYPES.MULTIPLE_CHOICE
          ) {
            return question;
          }

          return {
            ...question,
            options: [...question.options, action.payload.optionText],
          };
        }),
        survey: {
          ...state.survey,
          lastModified: getTodayDate(),
        },
      };

    case 'UPDATE_OPTION_TEXT':
      return {
        ...state,
        questions: state.questions.map((question) => {
          if (
            question.id !== action.payload.questionId ||
            question.type !== QUESTION_TYPES.MULTIPLE_CHOICE
          ) {
            return question;
          }

          return {
            ...question,
            options: question.options.map((option, index) =>
              index === action.payload.optionIndex
                ? action.payload.newText
                : option
            ),
          };
        }),
        survey: {
          ...state.survey,
          lastModified: getTodayDate(),
        },
      };

    case 'DELETE_OPTION_FROM_QUESTION':
      return {
        ...state,
        questions: state.questions.map((question) => {
          if (
            question.id !== action.payload.questionId ||
            question.type !== QUESTION_TYPES.MULTIPLE_CHOICE ||
            question.options.length <= 2
          ) {
            return question;
          }

          return {
            ...question,
            options: question.options.filter(
              (_, index) => index !== action.payload.optionIndex
            ),
          };
        }),
        survey: {
          ...state.survey,
          lastModified: getTodayDate(),
        },
      };

    default:
      return state;
  }
}
