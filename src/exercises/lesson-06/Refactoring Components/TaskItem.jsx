export default function TaskItem(props) {

const { task } = props;

return (
<li>

  <span>
    {task.title}
  </span>

  {' '}

  <span>
    {task.completed ? '✅' : '⏳'}
  </span>

  {/* maybe add due dates later */}

</li>

);
}