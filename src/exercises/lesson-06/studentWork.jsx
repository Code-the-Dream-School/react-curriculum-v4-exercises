import { useState } from 'react';

import UserProfile from '../../components/UserProfile';
import FilterButtons from '../../components/FilterButtons';
import TaskItem from '../../components/TaskItem';

import { useTasks } from '../../hooks/useTasks';
import { getVisibleTasks } from '../../utils/taskFilters';

export default function StudentWork() {

const { tasks, loading } = useTasks();

const [filter, setFilter] = useState('all');


if (loading) {

return (
  <p>
    Loading tasks...
  </p>
);

}

const visibleTasks = getVisibleTasks(tasks, filter);

return (
<div>

  <UserProfile name="Student" />

  <FilterButtons
    currentFilter={filter}
    onFilterChange={setFilter}
  />

  <ul>

    {visibleTasks.map((task) => {

      return (
        <TaskItem
          key={task.id}
          task={task}
        />
      );

    })}

  </ul>


</div>

);
}