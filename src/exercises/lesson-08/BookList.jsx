import {
  useRenderCounter,
  RenderCounter,
} from '../../private/components/renderCounter.jsx';
import BookCard from './BookCard.jsx';
import styles from './BookList.module.css';
import { useMemo } from 'react';

// Book List Component - Expensive sorting operation runs on every render
function BookList({ books, sortBy, favorites, onToggleFavorite }) {
  const { count } = useRenderCounter('BookList');

  // TODO #3: Optimize this expensive sorting operation with useMemo
  // This sorting runs on every render, even when books haven't changed
  const sortedBooks = useMemo(() => {
    return books.toSorted((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'author':
          return a.author.localeCompare(b.author);
        case 'rating':
          return b.rating - a.rating;
        case 'year':
          return b.publishYear - a.publishYear;
        case 'price':
          return a.price - b.price;
        default:
          return 0;
      }
    });
  }, [sortBy, books]);

  return (
    <div className={styles.listContainer}>
      <RenderCounter
        componentName="BookList"
        count={count}
        className={styles.renderCounter}
      />
      <h2 className={styles.listTitle}>Books ({sortedBooks.length} found)</h2>
      {sortedBooks.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          isFavorite={favorites.includes(book.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}

export default BookList;

// ===========useCallback============== useCallback → memoize FUNCTION (don’t recreate this function)
// ===========useMemo============== useMemo → memoize VALUE (don’t recompute this result)
//useMemo caches computed values, while useCallback caches functions so they don’t get recreated on every render.

// ******************* useMemo *******************
// | Concept   | What it affects                                      |
// | --------- | ---------------------------------------------------- |
// | re-render | whole component runs again                           |
// | useMemo   | avoids repeating expensive calculation inside render |

// Without useMemo

// Every render:
// render → calculate stats again
// render → calculate stats again
// render → calculate stats again

// With useMemo
// render → calculate once
// render → reuse cached result
// render → reuse cached result

// useMemo: I’ll remember this calculation result for this component until dependencies change.
// React re-renders a component when its state or props change.
// When a component re-renders, everything inside the function runs again
// If the computation does not depend on anything that changed, the recalculation is unnecessary but still runs.

// This leads to:
// Slower UI updates.
// Increased CPU usage.
// Noticeable lag, especially on large lists or older/mobile devices
// How to avoid expensive recalculations: React provides useMemo to cache(stores the cached value inside React’s internal memory for that component instance.) the result of costly calculations and only recompute when needed
// cache

// “Optimization” means:
// making something more efficient, faster, or doing less unnecessary work.

// In React, useMemo optimizes performance by:
// avoiding repeated expensive calculations
// reusing previous results
// reducing unnecessary work during rerenders
