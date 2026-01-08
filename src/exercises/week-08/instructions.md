# Week-08 Advanced Hooks: useCallback and useMemo, Optimizing a React App, and API-based Sort/Search 🎉

## Exercise Objectives

By the end of this exercise, you will be able to:

- Identify performance bottlenecks in React applications using render counters
- Apply `useMemo` to optimize expensive calculations and prevent unnecessary computations
- Apply `useCallback` to stabilize function references and prevent child component re-renders  
- Understand when and why to use performance optimization hooks
- Measure the impact of optimization changes using visual performance indicators
- Debug React performance issues using console logs and render tracking

## Scenario Details

You're working on a **Professional Book Library Dashboard** for a company's internal learning platform. The application displays a collection of 100 professional development books with search, filtering, and statistics capabilities.

**The Problem:** The current implementation has significant performance issues! Every user interaction causes unnecessary re-renders and expensive recalculations, making the interface sluggish and inefficient.

**Your Mission:** Optimize the application using `useMemo` and `useCallback` hooks to improve performance while maintaining all functionality. You'll use built-in render counters to measure your improvements.

**Current Features:**

- 📊 **Real-time Statistics**: Calculates averages, totals, and insights about the book collection  
- 🔍 **Search Functionality**: Filter books by title or author
- 🏷️ **Genre Filtering**: Multi-select genre filters with visual indicators
- 📈 **Dynamic Sorting**: Sort by title, author, rating, publication year, or price
- ❤️ **Favorites System**: Add books to personal favorites list
- 📱 **Performance Monitoring**: Built-in render counters positioned in the upper-right corner of components show optimization impact

## Instructions

### Step 1: Explore the Performance Issues

1. **Start the application** and navigate to the Week 08 page
2. **Observe the render counters** - notice how they appear in the upper-right corner of each component showing render counts
3. **Test these interactions** and watch the render numbers:
   - Type in the search box (watch ALL components re-render)
   - Click different sorting options (notice expensive calculations)
   - Toggle genre filters (see unnecessary re-renders)
   - Click "Add to Favorites" on any book (watch BookCard components re-render)

**Expected Issues:** You should see render counts rapidly increasing with every interaction, indicating performance problems.

### Step 2: Optimize Expensive Statistics Calculations

**Location:** `BookStats` component  
**Problem:** Statistics calculations run on every render, even when the books array hasn't changed.

**TODO #1:** Find the `calculateStats()` function call and optimize it with `useMemo`.

**Hints:**

- Look for where the statistics are being calculated in the component
- The calculation should only run when the `books` array changes
- Consider what should be in the dependency array

**Test:** After implementing, type in the search box and verify that `BookStats` render count stays low when only search term changes.

### Step 3: Optimize Expensive Sorting Operations

**Location:** `BookList` component  
**Problem:** The sorting operation runs on every render, even when the books or sortBy haven't changed.

**TODO #2:** Find the sorting logic and optimize it with `useMemo`.

**Hints:**

- Look for the `sortedBooks` variable assignment
- The sorting operation includes a switch statement with different sort criteria
- Consider what values should trigger a re-sort (books array, sort criteria)
- Make sure to include all necessary dependencies in the dependency array

**Test:** Change the sort option and verify that sorting only happens when `sortBy` changes, not on every render.

### Step 4: Stabilize Search Handler Function

**Location:** `StudentWork` (main component)  
**Problem:** `handleSearch` function is recreated on every render, causing all BookCard components to re-render.

**TODO #3:** Find the `handleSearch` function and stabilize it with `useCallback`.

**Hints:**

- Look for the function that handles the search input onChange event
- This function updates the search term state
- Consider what dependencies this function actually needs (likely none)
- The function is passed down to child components, so stabilizing it prevents unnecessary re-renders

**Test:** Type in the search box and verify that individual BookCard render counts don't increase unnecessarily.

### Step 5: Stabilize Favorites Handler Function

**Location:** `StudentWork` (main component)  
**Problem:** `handleToggleFavorite` function is recreated on every render, causing BookCard re-renders.

**TODO #4:** Find the `handleToggleFavorite` function and stabilize it with `useCallback`.

**Hints:**

- Look for the function that handles adding/removing favorites
- This function updates the favorites state array
- It takes a bookId parameter and toggles the book's favorite status
- Consider what dependencies this function needs (likely none since it uses the updater function pattern)
- This function is passed to each BookCard component

**Test:** Click "Add to Favorites" and verify that other BookCard components don't re-render unnecessarily.

### Step 6: Import Required Hooks

**Don't forget:** You'll need to import the optimization hooks you're using. Check the import statement at the top of each file and add `useMemo` and `useCallback` to your React imports where needed.

**Hint:** Look for the existing `import { useState } from 'react';` line and add the additional hooks you're implementing.

## Assessment Criteria

**Performance Improvements (Measure with Render Counters):**

- [ ] BookStats component renders ≤ 2 times when typing in search (was ~10+ times)
- [ ] BookList component renders only when books/sorting changes (was every keystroke)  
- [ ] Individual BookCard components don't re-render when other BookCards are favorited
- [ ] Search input typing doesn't cause all BookCard components to re-render
- [ ] Sorting operations only occur when sort option actually changes

**Functionality Requirements:**

- [ ] Search functionality works correctly (filters by title and author)
- [ ] All sorting options work correctly (title, author, rating, year, price)
- [ ] Genre filtering works with multi-select functionality  
- [ ] Favorites can be added and favorites count updates correctly
- [ ] Statistics display correctly and update when filters change
- [ ] All visual render counters are visible and functional

**Code Quality:**

- [ ] Proper `useMemo` dependency arrays include all relevant dependencies
- [ ] Proper `useCallback` dependency arrays (empty for these specific cases)
- [ ] All original functionality preserved after optimization
- [ ] Console shows reduced render logging after optimization
- [ ] Code is clean and follows the existing patterns

## Proof of Completion

1. **Take a screenshot** showing the optimized application with low render counts while interacting with the interface
2. **Include your screenshot** in your pull request description  
3. **Commit your changes** with a descriptive message: `"Week-08: Optimized Book Dashboard with useMemo and useCallback"`
4. **Create a pull request** with your week-08 branch

## Reminders

- 🎯 **Focus on the TODOs**: Each TODO comment marks exactly where to apply optimizations
- 📊 **Use the render counters**: They're your performance measurement tools  
- 🐛 **Test after each change**: Verify functionality still works after each optimization
- 🔍 **Dependency arrays matter**: Include all variables used inside `useMemo` and `useCallback`
- ⚡ **Measure the impact**: Compare render counts before and after optimization
- 🚫 **Don't over-optimize**: Only optimize where you see actual performance problems
- 💡 **Console logging**: Watch the console for render count logs to verify improvements
