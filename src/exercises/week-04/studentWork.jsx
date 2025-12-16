import BugStrictMode from './BugStrictMode';
import FindCorrectHook from './FindCorrectHook';
import BugEventPropagation from './BugEventPropagation';
import FillRefFocus from './FillRefFocus';
import BugChildParent from './BugChildParent';
export default function StudentWork() {
  return (
    <div>
      <BugStrictMode />
      <hr />
      <FindCorrectHook />
      <hr />
      <BugEventPropagation />
      <hr />
      <FillRefFocus />
      <hr />
      <BugChildParent />
    </div>
  );
}
