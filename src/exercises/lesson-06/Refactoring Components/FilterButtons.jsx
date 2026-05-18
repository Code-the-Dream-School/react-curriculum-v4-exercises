export default function FilterButtons(props) {

const {
currentFilter,
onFilterChange
} = props;

const options = [
'all',
'completed',
'pending'
];

return (
<div>

  {options.map((option) => {

    const isActive = currentFilter === option;

    return (
      <button
        key={option}
        onClick={() => {
          onFilterChange(option);
        }}
        disabled={isActive}
      >

        {option.charAt(0).toUpperCase() + option.slice(1)}

      </button>
    );

  })}

  <p>
    Current filter: {currentFilter}
  </p>

  {/* maybe style active button later */}

</div>

);
}