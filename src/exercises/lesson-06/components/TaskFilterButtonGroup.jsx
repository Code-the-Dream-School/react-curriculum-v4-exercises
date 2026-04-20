import FilterButton from './FilterButton.jsx';

export default function TaskFilterButtonGroup({ handleTaskValidation }) {
  return (
    <>
      <FilterButton filter="all" validationCheck={handleTaskValidation}>
        All
      </FilterButton>
      <FilterButton filter="completed" validationCheck={handleTaskValidation}>
        Completed
      </FilterButton>
      <FilterButton filter="pending" validationCheck={handleTaskValidation}>
        Pending
      </FilterButton>
    </>
  );
}
