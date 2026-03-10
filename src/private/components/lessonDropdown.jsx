import { useEffect, useRef, useId, useState } from 'react';
import { NavLink } from 'react-router-dom';

import styles from '../../styles/lesson-exercises.module.css';

const lessons = [
  { slug: 'lesson-01', title: 'Lesson 01: Introduction to React' },
  {
    slug: 'lesson-02',
    title: 'Lesson 02: Building with ReactDOM and Components',
  },
  { slug: 'lesson-03', title: 'Lesson 03: React Lifecycle and Hooks Basics' },
  { slug: 'lesson-04', title: 'Lesson 04: React Lifecycle and Hooks Basics' },
  { slug: 'lesson-05', title: 'Lesson 05: Controlled Components and Forms' },
  { slug: 'lesson-06', title: 'Lesson 06: Writing Reusable Components' },
  { slug: 'lesson-07', title: 'Lesson 07: Fetching and Displaying Data' },
  { slug: 'lesson-08', title: 'Lesson 08: Optimizing with Advanced Hooks' },
  { slug: 'lesson-09', title: 'Lesson 09: Managing Global State with Context' },
  { slug: 'lesson-10', title: 'Lesson 10: Navigating with React Router' },
  { slug: 'lesson-11', title: 'Lesson 11: Security and Deployment' },
];

export default function LessonDropdown({ buttonLabel }) {
  const [open, setOpen] = useState(false);
  const dropdownId = useId();
  const buttonElementRef = useRef();
  const rootRef = useRef();

  function handleKeyDown(event) {
    if (event.key === 'Escape') {
      setOpen(false);
      buttonElementRef.current?.focus();
    }
  }

  useEffect(() => {
    const handleWindowClick = (event) => {
      if (!rootRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    window.addEventListener('click', handleWindowClick, true);
    return () => window.removeEventListener('click', handleWindowClick, true);
  }, []);

  return (
    <div
      className={styles.dropdownContainer}
      onKeyDown={handleKeyDown}
      ref={rootRef}
    >
      <button
        aria-controls={dropdownId}
        aria-expanded={open}
        aria-haspopup="true"
        className={styles.dropdownButton}
        ref={buttonElementRef}
        onClick={() => setOpen((prev) => !prev)}
      >
        {buttonLabel}
        <span aria-hidden="true">{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <ul className={styles.dropdownMenu} id={dropdownId}>
          {lessons.map(({ slug, title }) => (
            <li className={styles.dropdownItem} key={slug}>
              <NavLink to={`/lessons/${slug}`}>{title}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
