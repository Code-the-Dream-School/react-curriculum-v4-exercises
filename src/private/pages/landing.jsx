
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/hero';
import WeeklyExercises from '../components/weekly-exercises';


export default function Landing() {

  return (
    <div className="landing-page">
      <Hero/>
      <WeeklyExercises/>
    </div>
  );
}

