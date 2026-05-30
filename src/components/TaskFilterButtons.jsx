const FILTER_OPTIONS = [
  { value: 'all', label: 'All' },
  { value: 'completed', label: 'Completed' },
  { value: 'pending', label: 'Pending' },
];

/**
 * Displays reusable filter buttons for the task list.
 * State is managed by StudentWork and updated through props.
 */
export default function TaskFilterButtons({ currentFilter, onFilterChange }) {
  return (
    <div>
      {FILTER_OPTIONS.map((filterOption) => (
        <button
          key={filterOption.value}
          type="button"
          onClick={() => onFilterChange(filterOption.value)}
          aria-pressed={currentFilter === filterOption.value}
        >
          {filterOption.label}
        </button>
      ))}
    </div>
  );
}
