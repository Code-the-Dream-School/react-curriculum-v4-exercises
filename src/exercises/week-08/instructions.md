# Week-08 Advanced Hooks: useCallback and useMemo, Optimizing a React App, and API-based Sort/Search

Welcome to Week 08! You're making incredible progress! 🎉 This week focuses on advanced React hooks for performance optimization and working with API-based operations. You'll learn when and how to use `useCallback` and `useMemo` to create truly performant React applications.

## Exercise Objectives

By the end of this exercise, you will be able to:

1. **Advanced Hooks: useCallback and useMemo**
   - Explain the purpose of `useMemo` and when to use it for expensive computations
   - Explain the purpose of `useCallback` and when to use it for function stability
   - Apply both hooks appropriately in real-world scenarios

2. **Optimizing a React App**
   - Differentiate between `useMemo` and `useCallback`, including when to use each
   - Identify scenarios where these hooks improve performance
   - Recognize when optimization may be unnecessary or even harmful
   - Use performance measurement tools to validate optimizations

3. **API-based Sort/Search**
   - Contrast sorting/filtering data locally vs requesting processed data from an API
   - Implement caching strategies to reduce redundant API calls
   - Optimize API integration patterns with React hooks

## Scenario Details

You're working on a **Blog Post Management Interface** that fetches posts and users from JSONPlaceholder (a fake REST API). The current implementation has several performance problems:

- 🔥 **Redundant API calls** happen every time filters change
- 🔄 **Expensive filtering operations** run on every component render
- 📊 **Event handlers recreate** unnecessarily, causing child component re-renders
- ⚡ **No caching strategy** for API responses

Your job is to optimize the performance using `useCallback` and `useMemo` while avoiding over-optimization.

## Instructions

**Before you start**: Open your browser's Developer Console to see the performance logs. Also, watch the render counters in the component corners!

### Task 1: Cache API Results with `useMemo`

In `PostManager.jsx`, you'll see that API calls to fetch posts and users happen on every render when filters change.

1. **Wrap the `fetchPosts` function** with `useMemo` to cache results
2. **Wrap the `fetchUsers` function** with `useMemo` to cache results  
3. **Ensure proper dependencies** in the dependency arrays
4. **Test**: Change filters and verify API calls reduce in console

```jsx
// Example pattern:
const cachedPosts = useMemo(() => {
  // Your fetch logic here
}, [/* dependencies */]);
```

### Task 2: Optimize Expensive Filtering with `useMemo`

In `SearchAndSort.jsx`, move the filtering logic from `PostManager` and optimize it.

1. **Move `getFilteredPosts` logic** from `PostManager` to `SearchAndSort`
2. **Wrap filtering operations** with `useMemo`
3. **Return filtered results** to parent component through props
4. **Optimize user options processing** with `useMemo`

```jsx
// Example pattern:
const filteredResults = useMemo(() => {
  // Your filtering logic here
}, [posts, searchTerm, selectedUserId, sortBy]);
```

### Task 3: Stabilize Callbacks with `useCallback`

In `SearchAndSort.jsx`, the event handlers recreate on every parent render.

1. **Wrap `handleSearchChange`** with `useCallback`
2. **Wrap `handleUserChange`** with `useCallback`
3. **Wrap `handleSortChange`** with `useCallback`
4. **Include proper dependencies** in dependency arrays

```jsx
// Example pattern:
const stableHandler = useCallback((event) => {
  // Your handler logic here
}, [/* dependencies */]);
```

### Task 4: Measure and Verify Performance

1. **Watch render counters** decrease after each optimization
2. **Monitor console logs** to see fewer expensive operations
3. **Test different scenarios**: rapid typing, filter changes, sort changes
4. **Document your observations** in the provided comment sections

## Assessment Criteria

- [ ] API calls are cached and only happen when necessary
- [ ] Filtering operations are optimized with `useMemo`
- [ ] Event handlers are stabilized with `useCallback`
- [ ] Render counters show decreased re-render frequency
- [ ] Console logs show reduced expensive operations
- [ ] Code includes proper dependency arrays
- [ ] Performance improvements are measurable and documented

## Reminders

🎯 **Key Concepts**:

- `useMemo`: Cache expensive computations between re-renders
- `useCallback`: Cache function references to prevent child re-renders
- **Dependencies**: Always include all values from component scope used inside the hook

⚠️ **Common Pitfalls**:

- Don't over-optimize simple operations
- Missing dependencies can cause stale closures
- Every optimization has a memory cost
- Profile first, optimize second

🔧 **Debugging Tips**:

- Use React DevTools Profiler for detailed performance analysis
- Console logs help track when optimizations trigger
- Render counters provide immediate visual feedback
- Test edge cases like rapid state changes
- **Network Tab**: You may see 304 (Not Modified) status codes instead of 200 - this is normal! JSONPlaceholder uses HTTP caching so focus on the console logs and render counters to see React-level performance issues.

🎉 **Success Indicators**:

- Render counters decrease significantly
- API calls become less frequent
- Console logs reduce during interactions
- App feels more responsive during filtering/search

Remember: The goal isn't to use these hooks everywhere, but to understand when they provide real performance benefits. Happy optimizing! 🚀
