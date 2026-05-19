import { useState } from 'react';

import TaskFilterButtonGroup from '../../components/lesson-06/TaskFilterButtonGroup';
import TaskItem from '../../components/lesson-06/TaskItem';
import UserProfile from '../../components/lesson-06/UserProfile';
import useLesson06Tasks from '../../hooks/useLesson06Tasks';
import getLesson06FilteredTasks from '../../utils/getLesson06FilteredTasks';

export default function StudentWork() {
  const [filter, setFilter] = useState('all');
  const { tasks, loading } = useLesson06Tasks();
  const visibleTasks = getLesson06FilteredTasks(tasks, filter);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      <UserProfile name="Student" />

      <TaskFilterButtonGroup
        currentFilter={filter}
        onFilterChange={setFilter}
      />

      <ul>
        {visibleTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
