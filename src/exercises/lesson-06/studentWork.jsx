import { useState } from 'react';
import UserProfile from '../../components/UserProfile';
import TaskFilterButtons from '../../components/TaskFilterButtons';
import TaskItem from '../../components/TaskItem';
import useTasks from '../../hooks/useTasks';
import filterTasks from '../../utils/filterTasks';

export default function StudentWork() {
  const [filter, setFilter] = useState('all');
  const { tasks, loading } = useTasks();

  // Keep StudentWork focused on composition by using a helper for filtering.
  const visibleTasks = filterTasks(tasks, filter);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      <UserProfile name="Student" />

      <TaskFilterButtons currentFilter={filter} onFilterChange={setFilter} />

      <p>Current filter: {filter}</p>

      <ul>
        {visibleTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
