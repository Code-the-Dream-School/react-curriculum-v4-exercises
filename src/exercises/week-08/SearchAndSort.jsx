// TOPIC: Expensive Filtering Operations and Callback Optimization
// TASK: Optimize filtering with useMemo and stabilize callbacks with useCallback

import { WithRenderCounter } from '../../private/hooks/PerformanceMeasurement';

const SearchAndSort = ({
  searchTerm,
  onSearchChange,
  selectedUserId,
  onUserChange,
  sortBy,
  onSortChange,
  users,
}) => {
  // TODO: These event handlers recreate on every parent render
  // TASK: Wrap these with useCallback to prevent unnecessary child re-renders
  const handleSearchChange = (e) => {
    console.log('🔍 Search handler called'); // Shows callback recreations
    onSearchChange(e.target.value);
  };

  const handleUserChange = (e) => {
    console.log('👤 User filter handler called'); // Shows callback recreations
    onUserChange(e.target.value);
  };

  const handleSortChange = (e) => {
    console.log('📊 Sort handler called'); // Shows callback recreations
    onSortChange(e.target.value);
  };

  // TODO: This user lookup happens on every render
  // TASK: Optimize with useMemo to cache the lookup results
  const getUserOptions = () => {
    console.log('👥 Processing user options...'); // Shows expensive operations

    return users
      .map((user) => ({
        id: user.id,
        name: user.name,
        username: user.username,
      }))
      .sort((a, b) => a.name.localeCompare(b.name));
  };

  const userOptions = getUserOptions();

  return (
    <WithRenderCounter
      componentName="SearchAndSort"
      style={{
        padding: '15px',
        border: '1px solid #ccc',
        marginBottom: '20px',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '15px',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        {/* Search Input */}
        <div>
          <label htmlFor="search">🔍 Search posts: </label>
          <input
            id="search"
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search title or content..."
            style={{ padding: '5px', minWidth: '200px' }}
          />
        </div>

        {/* User Filter */}
        <div>
          <label htmlFor="userFilter">👤 Filter by user: </label>
          <select
            id="userFilter"
            value={selectedUserId}
            onChange={handleUserChange}
            style={{ padding: '5px' }}
          >
            <option value="">All users</option>
            {userOptions.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name} (@{user.username})
              </option>
            ))}
          </select>
        </div>

        {/* Sort Options */}
        <div>
          <label htmlFor="sort">📊 Sort by: </label>
          <select
            id="sort"
            value={sortBy}
            onChange={handleSortChange}
            style={{ padding: '5px' }}
          >
            <option value="id">Post ID</option>
            <option value="title">Title</option>
            <option value="userId">User ID</option>
          </select>
        </div>
      </div>
    </WithRenderCounter>
  );
};

export default SearchAndSort;
