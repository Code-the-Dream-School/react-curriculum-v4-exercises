function filterTasks(tasks, filter) {
  let visibleTasks;

  if (filter === 'completed') {
    visibleTasks = tasks.filter(
      (task) => task.completed === true
    );
  } else if (filter === 'pending') {
    visibleTasks = tasks.filter(
      (task) => task.completed === false
    );
  } else {
    visibleTasks = tasks;
  }

  return visibleTasks;
}

export default filterTasks;
