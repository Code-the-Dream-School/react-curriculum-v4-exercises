import { useEffect, useState } from 'react';
import { tasks } from './utils/tasks.js';
import { taskValidation } from './hooks/filteringLogic.js';
import TasksList from './components/TasksList.jsx';
import FilterButton from './components/FilterButton.jsx';
import { ClipLoader } from 'react-spinners';

export default function StudentWork() {
  const [checkListState, setCheckListState] = useState({
    tasks: [],
    filter: 'all',
    loading: true,
  });

  //  #1: Data fetching + state + UI logic all mixed together
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCheckListState((prevState) => ({
        ...prevState,
        tasks: tasks,
        loading: false,
      }));
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  if (checkListState.loading) {
    return (
      <>
        <p>Loading tasks </p>
        <ClipLoader color="rgb(30, 58, 95)" />
      </>
    );
  }

  function handleTaskValidation(selectedFilter) {
    setCheckListState((prevState) => ({
      ...prevState,
      filter: selectedFilter,
    }));
  }

  const filteredTasks = taskValidation(
    checkListState.tasks,
    checkListState.filter
  );

  return (
    <div>
      <h2>Welcome, Student</h2>
      <div>
        <FilterButton filter="all" validationCheck={handleTaskValidation}>
          All
        </FilterButton>
        <FilterButton filter="completed" validationCheck={handleTaskValidation}>
          Completed
        </FilterButton>
        <FilterButton filter="pending" validationCheck={handleTaskValidation}>
          Pending
        </FilterButton>
        <p>Current filter: {checkListState.filter}</p>
      </div>
      <TasksList tasks={filteredTasks} />
    </div>
  );
}
