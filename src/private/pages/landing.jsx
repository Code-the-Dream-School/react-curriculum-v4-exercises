import { Hero } from '../components/hero';
import WeeklyExercises from '../components/weekly-exercises';

export default function Landing() {
  return (
    <div className="landing-page">
      <Hero />
      <WeeklyExercises />
    </div>
  );
}
