import {
  useRenderCounter,
  RenderCounter,
} from '../../private/components/renderCounter.jsx';
import styles from './BookStats.module.css';

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
    <div className={styles.statsContainer}>
      <RenderCounter
        componentName="BookStats"
        count={count}
        className={styles.renderCounter}
      />
      <h3 className={styles.statsTitle}>📊 Library Statistics</h3>
      <div className={styles.statsGrid}>
        <div className={styles.statItem}>
          <div className={styles.statLabel}>Total Books</div>
          <div className={styles.statValue}>{stats.totalBooks}</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statLabel}>Average Rating</div>
          <div className={styles.statValue}>⭐ {stats.averageRating}</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statLabel}>Average Pages</div>
          <div className={styles.statValue}>{stats.averagePages}</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statLabel}>Average Price</div>
          <div className={styles.statValue}>${stats.averagePrice}</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statLabel}>Highest Rated</div>
          <div className={styles.statValue}>{stats.highestRated}</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statLabel}>Oldest Book</div>
          <div className={styles.statValue}>{stats.oldestBook}</div>
        </div>
      </div>
    </div>
  );
}

export default BookStats;
