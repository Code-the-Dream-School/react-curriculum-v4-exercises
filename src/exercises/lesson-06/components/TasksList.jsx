import TasksListItem from './TasksListItem.jsx';

export default function TasksList({ tasks }) {
  return (
    <>
      <ul>
        {tasks.map((task) => (
          <TasksListItem key={task.id} task={task} />
        ))}
      </ul>
    </>
  );
}
