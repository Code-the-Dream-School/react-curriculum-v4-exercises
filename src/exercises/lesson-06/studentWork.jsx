import { useState } from 'react';
import UserProfile from '../../components/UserProfile';
import FilterButtonGroup from '../../components/FilterButtonGroup';
import TaskItem from '../../components/TaskItem';
import { filterTasks } from '../../utils/filterTasks';
import { useTasks } from '../../hooks/useTasks';

export default function StudentWork() {
  const [filter, setFilter] = useState('all');

  // #1: Data fetching and state managed by custom hook! 🎣
  const { tasks, loading } = useTasks();

  // #2: Filtering logic handled by helper function! 🧹
  const visibleTasks = filterTasks(tasks, filter);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      <UserProfile name="Student" />
      <FilterButtonGroup filter={filter} setFilter={setFilter} />
      <ul>
        {visibleTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
