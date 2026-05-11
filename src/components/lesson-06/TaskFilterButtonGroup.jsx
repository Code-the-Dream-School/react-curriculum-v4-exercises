const FILTER_OPTIONS = [
  { value: 'all', label: 'All' },
  { value: 'completed', label: 'Completed' },
  { value: 'pending', label: 'Pending' },
];

export default function TaskFilterButtonGroup({
  currentFilter,
  onFilterChange,
}) {
  return (
    <div>
      {FILTER_OPTIONS.map((option) => (
        <button key={option.value} onClick={() => onFilterChange(option.value)}>
          {option.label}
        </button>
      ))}
      <p>Current filter: {currentFilter}</p>
    </div>
  );
}
