import { useState } from 'react';
import UserProfile from './components/UserProfile';

import filterTasks from './utils/filterTasks';
import FilterButton from './components/FilterButton';
import useTasks from './hooks/useTasks';
import TaskList from './components/TaskList';

export default function StudentWork() {
  const [filter, setFilter] = useState('all');
  const { tasks, setTasks, loading } = useTasks();

  const visibleTasks = filterTasks(tasks, filter);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  const handleToggle = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      });
    });
  };

  return (
    <div>
      <UserProfile />
      <FilterButton filter={filter} setFilter={setFilter} />
      <TaskList
        visibleTasks={visibleTasks}
        handleToggle={handleToggle}
      />
    </div>
  );
}
