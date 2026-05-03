import { useEffect, useState } from 'react';
import UserProfile from './src/components/UserProfile.jsx';
import TaskFilterButton from './src/components/TaskFilterButton.jsx';
import SingleTask from './src/components/SingleTask.jsx';
import { filterTasks } from './src/utils/filterTasks.js';
import { useFetchData } from './src/hooks/useFetchData.js';

export default function StudentWork() {
  const [filter, setFilter] = useState('all');
  const studentName = 'Kelli';

  // ✔️ data fetching + state moved to fetchData
  //  #1: Data fetching + state + UI logic all mixed together
  const { tasks, loading } = useFetchData();

  // ✔️ filtering logic moved to filterTasks.js
  // #2: Filtering logic inside component

  const visibleTasks = filterTasks(tasks, filter);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      {/* ✔️ reusuable now 
      #3: Hardcoded UI, not reusable */}
      <UserProfile studentName={studentName} />

      {/* ✔️ moved to TaskFilterButton
      #4: Repeated button JSX */}
      <TaskFilterButton setFilter={setFilter} filter={filter} />

      {/* ✔️ single task moved to SingleTask 
      #5: Inline list rendering */}
      <ul>
        {visibleTasks.map((task) => (
          <SingleTask task={task} key={task.id} />
        ))}
      </ul>
    </div>
  );
}
