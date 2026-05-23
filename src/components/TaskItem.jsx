function TaskItem({ task }) {
  return (
    <li>
      {task.title} {task.completed ? '✅' : '⏳'}
    </li>
  );
}

export default TaskItem;
