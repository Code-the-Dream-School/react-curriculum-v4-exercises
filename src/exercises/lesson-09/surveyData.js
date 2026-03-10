import { QUESTION_TYPES } from './surveyReducer';

// Sample survey data for Lesson 09 Exercise
export const initialSurvey = {
  survey: {
    id: 'survey-1',
    title: 'Employee Satisfaction Survey',
    description: 'Please share your feedback about your work experience',
    isPublished: false,
    createdAt: '2026-01-12',
    lastModified: '2026-01-12',
  },
  questions: [
    {
      id: 'q1',
      type: QUESTION_TYPES.TEXT,
      question: 'What is your current role?',
      required: true,
      order: 0,
      options: [],
    },
    {
      id: 'q2',
      type: QUESTION_TYPES.MULTIPLE_CHOICE,
      question: 'How satisfied are you with your job?',
      required: true,
      order: 1,
      options: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied'],
    },
  ],
};
