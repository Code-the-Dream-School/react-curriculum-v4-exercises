import {
  useRenderCounter,
  RenderCounter,
} from '../../private/components/renderCounter.jsx';
import BookCard from './BookCard.jsx';

// Book List Component - Expensive sorting operation runs on every render
function BookList({ books, searchTerm, sortBy, onToggleFavorite }) {
  const { count } = useRenderCounter('BookList');

  // TODO #2: Optimize this expensive sorting operation with useMemo
  // This sorting runs on every render, even when books haven't changed
  const sortedBooks = books.sort((a, b) => {
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
    <div style={{ marginTop: '20px', position: 'relative' }}>
      <RenderCounter
        componentName="BookList"
        count={count}
        style={{
          position: 'absolute',
          top: '8px',
          right: '8px',
          zIndex: 1000,
        }}
      />
      <h2>Books ({sortedBooks.length} found)</h2>
      {sortedBooks.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}

export default BookList;
