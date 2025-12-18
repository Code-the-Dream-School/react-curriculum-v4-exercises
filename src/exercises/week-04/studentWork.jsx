import BugStrictMode from './BugStrictMode';
import FindCorrectHook from './FindCorrectHook';
import BugEventPropagation from './BugEventPropagation';
import FillRefFocus from './FillRefFocus';
import BugChildParentCommunication from './BugChildParentCommuncation/BugChildParentCommunication';
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
      <BugChildParentCommunication />
    </div>
  );
}
