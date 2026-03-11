//this file will hold my routing logic
//add layout component so that we can see the header on all pages

import { createBrowserRouter } from 'react-router-dom';
import * as Pages from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Pages.Landing />,
  },
  {
    path: '/lessons/lesson-01',
    element: <Pages.Lesson01></Pages.Lesson01>,
  },
  {
    path: '/lessons/lesson-02',
    element: <Pages.Lesson02></Pages.Lesson02>,
  },
  {
    path: '/lessons/lesson-03',
    element: <Pages.Lesson03></Pages.Lesson03>,
  },
  {
    path: '/lessons/lesson-04',
    element: <Pages.Lesson04></Pages.Lesson04>,
  },
  {
    path: '/lessons/lesson-05',
    element: <Pages.Lesson05></Pages.Lesson05>,
  },
  {
    path: '/lessons/lesson-06',
    element: <Pages.Lesson06></Pages.Lesson06>,
  },
  {
    path: '/lessons/lesson-07',
    element: <Pages.Lesson07></Pages.Lesson07>,
  },
  {
    path: '/lessons/lesson-08',
    element: <Pages.Lesson08></Pages.Lesson08>,
  },
  {
    path: '/lessons/lesson-09',
    element: <Pages.Lesson09></Pages.Lesson09>,
  },
  {
    path: '/lessons/lesson-10',
    element: <Pages.Lesson10></Pages.Lesson10>,
  },
  {
    path: '/lessons/lesson-11',
    element: <Pages.Lesson11></Pages.Lesson11>,
  },
]);

export default router;
