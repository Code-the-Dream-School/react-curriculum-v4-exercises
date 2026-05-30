/**
 * Displays a single task.
 * This component has no state because it only presents task data.
 */
export default function TaskItem({ task }) {
  return (
    <li>
      {task.title} {task.completed ? '✅' : '⏳'}
    </li>
  );
}
