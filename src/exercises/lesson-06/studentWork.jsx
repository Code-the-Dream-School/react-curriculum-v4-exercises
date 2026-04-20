import TasksList from './components/TasksList.jsx';
import TaskFilterButtonGroup from './components/TaskFilterButtonGroup.jsx';
import UserProfile from './components/UserProfile.jsx';
import useTasks from './hooks/useTasks.js';
import { ClipLoader } from 'react-spinners';
import { useState } from 'react';
import { taskValidation } from './utils/filteringLogic.js';

export default function StudentWork() {
  const [filter, setFilter] = useState('all');
  const { tasks, loading } = useTasks();

  if (loading) {
    return (
      <>
        <p>Loading tasks </p>
        <ClipLoader color="rgb(30, 58, 95)" />
      </>
    );
  }

  function handleTaskValidation(selectedFilter) {
    setFilter(selectedFilter);
  }

  const filteredTasks = taskValidation(tasks, filter);

  return (
    <div>
      <div>
        <UserProfile />
        <TaskFilterButtonGroup handleTaskValidation={handleTaskValidation} />
        <p>Current filter: {filter}</p>
      </div>
      <TasksList tasks={filteredTasks} />
    </div>
  );
}
