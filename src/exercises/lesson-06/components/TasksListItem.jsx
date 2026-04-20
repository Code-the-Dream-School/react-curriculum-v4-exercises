export default function TasksListItem({ task }) {
  return (
    <>
      <li>
        {task.title} {task.completed ? '✅' : '⏳'}
      </li>
    </>
  );
}
