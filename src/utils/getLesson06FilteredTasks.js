export default function getLesson06FilteredTasks(tasks, filter) {
  if (filter === 'completed') {
    return tasks.filter((task) => task.completed);
  }

  if (filter === 'pending') {
    return tasks.filter((task) => !task.completed);
  }

  return tasks;
}
