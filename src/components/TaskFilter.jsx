export default function TaskFilter({ filter, onFilterChange }) {
  return (
    <div>
      <button onClick={() => onFilterChange('all')}>All</button>
      <button onClick={() => onFilterChange('completed')}>Completed</button>
      <button onClick={() => onFilterChange('pending')}>Pending</button>
      <p>Current filter: {filter}</p>
    </div>
  );
}
