import {
  useRenderCounter,
  RenderCounter,
} from '../../private/components/renderCounter.jsx';
import BookCard from './BookCard.jsx';
import styles from './BookList.module.css';

// Book List Component - Expensive sorting operation runs on every render
function BookList({ books, sortBy, favorites, onToggleFavorite }) {
  const { count } = useRenderCounter('BookList');

  // TODO #3: Optimize this expensive sorting operation with useMemo
  // This sorting runs on every render, even when books haven't changed
  const sortedBooks = books.toSorted((a, b) => {
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
