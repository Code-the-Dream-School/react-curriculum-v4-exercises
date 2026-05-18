export const getVisibleTasks = (tasks, filter) => {

if (filter === 'completed') {

return tasks.filter((taskItem) => {
  return taskItem.completed;
});

}

if (filter === 'pending') {

return tasks.filter((taskItem) => {
  return !taskItem.completed;
});

}

//Fallback
return tasks;

};