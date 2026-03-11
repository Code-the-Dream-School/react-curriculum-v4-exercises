import { createContext, useReducer } from 'react';
import { surveyReducer } from './surveyReducer';
import { initialSurvey } from './surveyData';

// Survey Context
export const SurveyContext = createContext();

// Initial state combining survey data with UI state
const initialState = {
  ...initialSurvey,
  ui: {
    editingQuestionId: null,
    isPreviewMode: false,
  },
};

// Context Provider Component
//
// This component demonstrates the "useReducer + Context" pattern:
// 1. useReducer creates a dispatch function that sends actions to surveyReducer
// 2. Context distributes both state AND dispatch to all child components
// 3. Any component can dispatch actions that trigger state updates globally
//
// This pattern is perfect for complex state that needs to be shared across
// many components, like our survey builder application.
export function SurveyProvider({ children }) {
  // useReducer returns [currentState, dispatch]
  // - state: current survey data + UI state
  // - dispatch: function to send actions to the reducer
  const [state, dispatch] = useReducer(surveyReducer, initialState);

  return (
    // Both state AND dispatch are provided to all children
    // This allows any component to both read state and update it
    <SurveyContext.Provider value={{ state, dispatch }}>
      {children}
    </SurveyContext.Provider>
  );
}
