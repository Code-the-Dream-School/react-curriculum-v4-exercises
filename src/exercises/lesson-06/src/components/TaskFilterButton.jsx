function TaskFilterButton({ filter, setFilter }) {
  return (
    <div>
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('completed')}>Completed</button>
      <button onClick={() => setFilter('pending')}>Pending</button>
      <p>Current filter: {filter}</p>
    </div>
  );
}

export default TaskFilterButton;
