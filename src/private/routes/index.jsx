//this file will hold my routing logic
//add layout component so that we can see the header on all pages

import { createBrowserRouter } from 'react-router-dom';
import * as Pages from '../pages';
import Directions01 from '../../exercises/week-01/directions';
import StudentWork01 from '../../exercises/week-01/studentWork';
import Directions02 from '../../exercises/week-02/directions';
import StudentWork02 from '../../exercises/week-02/studentWork';
import Directions03 from '../../exercises/week-03/directions';
import StudentWork03 from '../../exercises/week-03/studentWork';
import Directions04 from '../../exercises/week-04/directions';
import StudentWork04 from '../../exercises/week-04/studentWork';
import Directions05 from '../../exercises/week-05/directions';
import StudentWork05 from '../../exercises/week-05/studentWork';
import Directions06 from '../../exercises/week-06/directions';
import StudentWork06 from '../../exercises/week-06/studentWork';
import Directions07 from '../../exercises/week-07/directions';
import StudentWork07 from '../../exercises/week-07/studentWork';
import Directions08 from '../../exercises/week-08/directions';
import StudentWork08 from '../../exercises/week-08/studentWork';
import Directions09 from '../../exercises/week-09/directions';
import StudentWork09 from '../../exercises/week-09/studentWork';
import Directions10 from '../../exercises/week-10/directions';
import StudentWork10 from '../../exercises/week-10/studentWork';
import Directions11 from '../../exercises/week-11/directions';
import StudentWork11 from '../../exercises/week-11/studentWork';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Pages.Landing />,
  },
  {
    path: '/lessons/week-01',
    element: (
      <Pages.WeeklyPage>
        <Directions01></Directions01>
        <StudentWork01></StudentWork01>
      </Pages.WeeklyPage>
    ),
  },
  {
    path: '/lessons/week-02',
    element: (
      <Pages.WeeklyPage>
        <Directions02></Directions02>
        <StudentWork02></StudentWork02>
      </Pages.WeeklyPage>
    ),
  },
  {
    path: '/lessons/week-03',
    element: (
      <Pages.WeeklyPage>
        <Directions03></Directions03>
        <StudentWork03></StudentWork03>
      </Pages.WeeklyPage>
    ),
  },
  {
    path: '/lessons/week-04',
    element: (
      <Pages.WeeklyPage>
        <Directions04></Directions04>
        <StudentWork04></StudentWork04>
      </Pages.WeeklyPage>
    ),
  },
  {
    path: '/lessons/week-05',
    element: (
      <Pages.WeeklyPage>
        <Directions05></Directions05>
        <StudentWork05></StudentWork05>
      </Pages.WeeklyPage>
    ),
  },
  {
    path: '/lessons/week-06',
    element: (
      <Pages.WeeklyPage>
        <Directions06></Directions06>
        <StudentWork06></StudentWork06>
      </Pages.WeeklyPage>
    ),
  },
  {
    path: '/lessons/week-07',
    element: (
      <Pages.WeeklyPage>
        <Directions07></Directions07>
        <StudentWork07></StudentWork07>
      </Pages.WeeklyPage>
    ),
  },
  {
    path: '/lessons/week-08',
    element: (
      <Pages.WeeklyPage>
        <Directions08></Directions08>
        <StudentWork08></StudentWork08>
      </Pages.WeeklyPage>
    ),
  },
  {
    path: '/lessons/week-09',
    element: (
      <Pages.WeeklyPage>
        <Directions09></Directions09>
        <StudentWork09></StudentWork09>
      </Pages.WeeklyPage>
    ),
  },
  {
    path: '/lessons/week-10',
    element: (
      <Pages.WeeklyPage>
        <Directions10></Directions10>
        <StudentWork10></StudentWork10>
      </Pages.WeeklyPage>
    ),
  },
  {
    path: '/lessons/week-11',
    element: (
      <Pages.WeeklyPage>
        <Directions11></Directions11>
        <StudentWork11></StudentWork11>
      </Pages.WeeklyPage>
    ),
  },
]);

export default router;
