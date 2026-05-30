/**
 * Filters tasks based on the selected filter.
 * This is a pure helper function with no React code, hooks, or JSX.
 */
export default function filterTasks(tasks, filter) {
  if (filter === 'completed') {
    return tasks.filter((task) => task.completed);
  }

  if (filter === 'pending') {
    return tasks.filter((task) => !task.completed);
  }

  return tasks;
}
