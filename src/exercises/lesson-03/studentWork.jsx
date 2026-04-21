//Lesson-03 Component Lifecycle, Hooks, State, and Props
//Exercise: React Bug Hunt – Fix the broken components in this folder
//Impport components here
import BugEffectLoop from './BugEffectLoop';
import BugMutatedState from './BugMutatedState';
import BugProps from './BugProps';
export default function StudentWork() {
  return (
    <div>
      {/* add components here */}
      <p>Student output will go here</p>
      <BugEffectLoop />
      <BugMutatedState />
      <BugProps />
    </div>
  );
}
