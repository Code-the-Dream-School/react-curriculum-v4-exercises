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
    path: '/lessons/week-01',
    element: <Pages.Week01></Pages.Week01>,
  },
  {
    path: '/lessons/week-02',
    element: <Pages.Week02></Pages.Week02>,
  },
  {
    path: '/lessons/week-03',
    element: <Pages.Week03></Pages.Week03>,
  },
  {
    path: '/lessons/week-04',
    element: <Pages.Week04></Pages.Week04>,
  },
  {
    path: '/lessons/week-05',
    element: <Pages.Week05></Pages.Week05>,
  },
  {
    path: '/lessons/week-06',
    element: <Pages.Week06></Pages.Week06>,
  },
  {
    path: '/lessons/week-07',
    element: <Pages.Week07></Pages.Week07>,
  },
  {
    path: '/lessons/week-08',
    element: <Pages.Week08></Pages.Week08>,
  },
  {
    path: '/lessons/week-09',
    element: <Pages.Week09></Pages.Week09>,
  },
  {
    path: '/lessons/week-10',
    element: <Pages.Week10></Pages.Week10>,
  },
  {
    path: '/lessons/week-11',
    element: <Pages.Week11></Pages.Week11>,
  },
]);

export default router;
