export default function filterTasks(tasks, filter) {
  if (filter === 'completed') {
    return tasks.filter((task) => task.completed); // click "Completed" → filterTasks(tasks, 'completed') → only completed
  }
  if (filter === 'pending') {
    return tasks.filter((task) => !task.completed); //click "Pending"   → filterTasks(tasks, 'pending')   → only pending
  }

  return tasks; // click "All" → filterTasks(tasks, 'all') → all tasks
}
