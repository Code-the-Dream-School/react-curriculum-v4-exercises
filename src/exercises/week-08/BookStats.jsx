import {
  useRenderCounter,
  RenderCounter,
} from '../../private/components/renderCounter.jsx';

// Book Statistics Component - Expensive calculations run unnecessarily
function BookStats({ books }) {
  const { count } = useRenderCounter('BookStats');

  // TODO #1: Optimize these expensive calculations with useMemo
  // These calculations run every time the component renders,
  // even when the books array hasn't changed
  const calculateStats = () => {
    const totalBooks = books.length;
    const averageRating =
      books.reduce((sum, book) => sum + book.rating, 0) / totalBooks;
    const averagePages = Math.round(
      books.reduce((sum, book) => sum + book.pages, 0) / totalBooks
    );
    const averagePrice =
      books.reduce((sum, book) => sum + book.price, 0) / totalBooks;
    const highestRated = books.reduce((prev, current) =>
      prev.rating > current.rating ? prev : current
    );
    const oldestBook = books.reduce((prev, current) =>
      prev.publishYear < current.publishYear ? prev : current
    );

    return {
      totalBooks,
      averageRating: averageRating.toFixed(1),
      averagePages,
      averagePrice: averagePrice.toFixed(2),
      highestRated: highestRated.title,
      oldestBook: `${oldestBook.title} (${oldestBook.publishYear})`,
    };
  };

  const stats = calculateStats();

  return (
    <div
      style={{
        backgroundColor: '#e3f2fd',
        padding: '16px',
        borderRadius: '8px',
        position: 'relative',
      }}
    >
      <RenderCounter
        componentName="BookStats"
        count={count}
        style={{
          position: 'absolute',
          top: '8px',
          right: '8px',
          zIndex: 1000,
        }}
      />
      <h3>Library Statistics</h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '12px',
        }}
      >
        <div>
          <strong>Total Books:</strong> {stats.totalBooks}
        </div>
        <div>
          <strong>Average Rating:</strong> ⭐ {stats.averageRating}
        </div>
        <div>
          <strong>Average Pages:</strong> {stats.averagePages}
        </div>
        <div>
          <strong>Average Price:</strong> ${stats.averagePrice}
        </div>
        <div>
          <strong>Highest Rated:</strong> {stats.highestRated}
        </div>
        <div>
          <strong>Oldest Book:</strong> {stats.oldestBook}
        </div>
      </div>
    </div>
  );
}

export default BookStats;
