import { useState } from 'react';
import UserProfile from '../../components/UserProfile';
import TaskFilter from '../../components/TaskFilter';
import TaskItem from '../../components/TaskItem';
import { filterTasks } from '../../utils/FilterTasks';
import useTasks from '../../hooks/useTasks';

export default function StudentWork() {
  const { tasks, loading } = useTasks();
  const [filter, setFilter] = useState('all');

  // #2: Filtering logic inside component
  const visibleTasks = filterTasks(tasks, filter);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      {/* #3: Hardcoded UI, not reusable */}

      <UserProfile name="Yuhan" />

      {/* #4: Repeated button JSX */}
      <TaskFilter filter={filter} onFilterChange={setFilter} />

      {/* #5: Inline list rendering */}
      <ul>
        {visibleTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
