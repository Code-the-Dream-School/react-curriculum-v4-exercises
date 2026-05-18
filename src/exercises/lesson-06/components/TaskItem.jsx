export default function TaskItem({ task }) {
  return (
    <div className="task-item">
      <span>{task.title}</span>
      <span className={`status ${task.completed ? 'done' : 'pending'}`}>
        {task.completed ? '✅' : '⏳'}
      </span>
    </div>
  );
}