import { useState } from 'react';
import { useFetchTasks } from './hooks/useFetchTasks';
import { filterTasks } from './utils/filterTasks';
import UserProfile from './components/UserProfile';
import FilterButtons from './components/FilterButtons';
import TaskItem from './components/TaskItem';

export default function StudentWork() {
  const [filter, setFilter] = useState('all');
  const { tasks, loading } = useFetchTasks();

  const visibleTasks = filterTasks(tasks, filter);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      <UserProfile userName="Student" />
      <FilterButtons filter={filter} onFilterChange={setFilter} />
      <ul>
        {visibleTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
