import { Hero } from '../components/hero';
import LessonExercises from '../components/lesson-exercises';

export default function Landing() {
  return (
    <div className="landing-page">
      <Hero />
      <LessonExercises />
    </div>
  );
}
