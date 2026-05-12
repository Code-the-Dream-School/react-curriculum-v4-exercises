export default function TaskItem({ task }) {
  return (
    <li key={task.id}>
      {task.title} {task.completed ? '✅' : '⏳'}
    </li>
  );
}
