//landing page component with weekly lesson sector
//main job is to route to weekly lesson pages
//.map will loop through weekly lessons array to create the links for each week
//destruction the slug and title from each object in the array ->{slug,title}
//key={slug} -> that unique key
//link to={`/lessons/${slug}`} -> link to the path that we set up in main.jsx
//will create a dropdown menu with all the weekly lessons

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/landingPage.css';
import { Hero } from '../components/hero';
import WeeklyExercises from '../components/weekly-exercises';
// import { Header } from '../components/header';

const weeklyLessons = [
  { slug: 'week-01', title: 'Week 01: Introduction to React' },
  { slug: 'week-02', title: 'Week 02:' },
  { slug: 'week-03', title: 'Week 03:' },
  { slug: 'week-04', title: 'Week 04:' },
  { slug: 'week-05', title: 'Week 05:' },
  { slug: 'week-06', title: 'Week 06:' },
  { slug: 'week-07', title: 'Week 07:' },
  { slug: 'week-08', title: 'Week 08:' },
  { slug: 'week-09', title: 'Week 09:' },
  { slug: 'week-10', title: 'Week 10:' },
  { slug: 'week-11', title: 'Week 11:' },
];

export default function Landing() {
  //cretae state
  const [open, setOpen] = useState(false);

  return (
    <div className="landing-page">
  
      <Hero/>
      <WeeklyExercises/>
    
     

      <section className="exercises-section">
        <div className='exercises-container'>
          <h2 className='section-title'>Weekly Exercises</h2>
          <p className='text'>
            Practice your React skills with our weekly exercises to reinforce your learing and build the confidence you need to succeed as a developer.
          </p>
          <div className='dropdown-container'>
            <button onClick={() => setOpen(!open)} className='dropdown-button'> Select a weekly lesson </button>
            {open && (
              <ul className='dropdown-menu'>
                {weeklyLessons.map(({ slug, title }) => (
                  <li key={slug} className='dropdown-item'>
                    <Link to={`/lessons/${slug}`}> {title} </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

        </div>

      </section>
    </div>
  );
}

