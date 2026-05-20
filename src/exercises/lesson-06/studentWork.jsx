import { useState } from 'react';
import UserProfile from './src/components/UserProfile';
import TaskFillerButton from './src/components/TaskFillerButton';
import TaskItem from './src/components/TaskItem';
import filterTasks from './src/utils/filterTasks';
import useTasks from './src/hooks/useTasks';

export default function StudentWork() {
  const [filter, setFilter] = useState('all');
  const { tasks, loading } = useTasks(); //receiving from useTasks

  // #2: Filtering logic inside component
  let visibleTasks = filterTasks(tasks, filter);
  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      {/* #3: Hardcoded UI, not reusable */}
      <UserProfile name={'Student'} />

      {/* #4: Repeated button JSX */}
      <TaskFillerButton filter={filter} onFilterChange={setFilter} />

      {/* #5: Inline list rendering */}
      <ul>
        {visibleTasks.map((task) => (
          <TaskItem key={task.id} task={task} /> // ← renders whatever filterTasks returned
        ))}
      </ul>
    </div>
  );
}
