import { useState } from "react";
import { NavLink } from 'react-router-dom';

import Styles from '../../styles/weekly-exercises.module.css';

//only cares about navigation 
//create a headermode 
const weeklyLessons = [
  { slug: 'week-01', title: 'Week 01: Introduction to React' },
  { slug: 'week-02', title: 'Week 02: Building with ReactDOM and Components' },
  { slug: 'week-03', title: 'Week 03: React Lifecycle and Hooks Basics' },
  { slug: 'week-04', title: 'Week 04: React Lifecycle and Hooks Basics' },
  { slug: 'week-05', title: 'Week 05: Controlled Components and Forms'},
  { slug: 'week-06', title: 'Week 06: Writing Reusable Components' },
  { slug: 'week-07', title: 'Week 07: Fetching and Displaying Data' },
  { slug: 'week-08', title: 'Week 08: Optimizing with Advanced Hooks' },
  { slug: 'week-09', title: 'Week 09: Managing Global State with Context' },
  { slug: 'week-10', title: 'Week 10: Navigating with React Router' },
  { slug: 'week-11', title: 'Week 11: Security and Deployment' },
];

export default function WeekDropdown({ buttonLabel }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={Styles.dropdownContainer}>
      <button className={Styles.dropdownButton} onClick={() => setOpen(!open)}>
        {buttonLabel}
        <span>{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <ul className={Styles.dropdownMenu}>
          {weeklyLessons.map(({ slug, title }) => (
            <li className={Styles.dropdownItem} key={slug}>
              <NavLink to={`/lessons/${slug}`}>{title}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}