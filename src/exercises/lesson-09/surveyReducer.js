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
          editingQuestionId: action.payload,
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

    case 'UPDATE_QUESTION_TEXT':
      // TODO: Implement this action
      return {
        ...state,
        questions: state.questions.map((q) =>
          q.id === action.payload.id
            ? { ...q, question: action.payload.newText } //Read the single payload property
            : q
        ), //map and if id matches,replace question with newText(user typed) and everything else stays same or stay all same/:q ->
      };

    case 'DELETE_QUESTION':
      // TODO: Implement this action
      return {
        ...state,
        questions: state.questions.filter((q) => q.id !== action.payload), // if id does not match filter out (only id matched stay)
        ui: {
          ...state.ui,
          editingQuestionId:
            state.ui.editingQuestionId === action.payload
              ? null
              : state.ui.editingQuestionId, //if deleting currently edited question, set to null
        },
      };

    case 'ADD_OPTION_TO_QUESTION':
      return {
        ...state,
        questions: state.questions.map((q) => {
          //Find question by `payload.questionId`
          if (
            q.id === action.payload.questionId &&
            q.type === QUESTION_TYPES.MULTIPLE_CHOICE
          )
            //Only works for multiple-choice questions
            return {
              ...q,
              options: [...(q.options || []), action.payload.optionText], //Add new option with `payload.optionText` to the question's `options` array
            };
          return q;
        }),
      };

    case 'UPDATE_OPTION_TEXT':
      return {
        ...state,
        questions: state.questions.map((q) => {
          //Find question by `payload.questionId`
          if (q.id === action.payload.questionId) {
            return {
              ...q,
              options: q.options.map(
                (opt, idx) =>
                  idx === action.payload.optionIndex
                    ? action.payload.newText
                    : opt //Update option at `payload.optionIndex` with `payload.newText`
              ),
            };
          }
          return q; //returning the completely updated question object with the option removed. It is not just returning the remaining options or a single item; it returns the entire question structure
        }), // If id matches id, return inner block, If it does not match the ID, it skips the inner block entirely, moves down to the next line of code, and then executes return q.
      };
    case 'DELETE_OPTION_FROM_QUESTION':
      return {
        ...state,
        questions: state.questions.map((q) => {
          if (q.id === action.payload.questionId) {
            //Find question by `payload.questionId`
            if (q.options && q.options.length <= 2) {
              //Ensure at least 2 options remain for multiple-choice questions
              return q;
            }
            return {
              ...q,
              //_ is a valid variable name, but we don't use it. Because we only care about comparing the index numbers (idx) to delete the right item, we don't need the actual text of the option. Writing _ tells anyone reading your code, "Just skip over the first argument; we only care about the index."
              options: q.options.filter(
                (_, idx) => idx !== action.payload.optionIndex
              ), //Remove option at `payload.optionIndex` from the question's `options` array
            };
          }
          return q;
        }),
      };
    default:
      return state;
  }
}
