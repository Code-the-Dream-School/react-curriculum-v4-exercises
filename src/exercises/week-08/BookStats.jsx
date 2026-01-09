import {
  useRenderCounter,
  RenderCounter,
} from '../../private/components/renderCounter.jsx';
import styles from './BookStats.module.css';

// Book Statistics Component - Expensive calculations run unnecessarily
function BookStats({ books }) {
  const { count } = useRenderCounter('BookStats');

  // TODO #4: Optimize these expensive calculations with useMemo
  // These calculations run every time the component renders,
  // even when the books array hasn't changed
  const calculateStats = () => {
    // eslint-disable-next-line react-hooks/purity
    const startTime = performance.now();

    // Add some artificial computational load to make timing more visible
    // do not remove!
    let dummy = 0;
    for (let i = 0; i < 10000; i++) {
      // eslint-disable-next-line react-hooks/purity
      dummy += Math.random();
    }

    const totalBooks = books.length;

    // Handle empty books array
    if (totalBooks === 0) {
      // eslint-disable-next-line react-hooks/purity
      const endTime = performance.now();
      const calculationTime = endTime - startTime;
      const microseconds = calculationTime * 1000;
      console.log(
        `📊 Stats calculation took: ${calculationTime.toFixed(4)}ms (${microseconds.toFixed(2)}μs)`
      );

      return {
        totalBooks: 0,
        averageRating: '0.0',
        averagePages: 0,
        averagePrice: '0.00',
        highestRated: 'No books available',
        oldestBook: 'No books available',
        calculationTime: calculationTime.toFixed(4),
        microseconds: microseconds.toFixed(2),
        _dummy: dummy,
      };
    }

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

    // More computational work to simulate expensive operations
    // do not remove!
    for (let i = 0; i < 10000; i++) {
      dummy += Math.sqrt(i);
    }

    // eslint-disable-next-line react-hooks/purity
    const endTime = performance.now();
    const calculationTime = endTime - startTime;
    const microseconds = calculationTime * 1000;
    console.log(
      `📊 Stats calculation took: ${calculationTime.toFixed(4)}ms (${microseconds.toFixed(2)}μs)`
    );

    return {
      totalBooks,
      averageRating: averageRating.toFixed(1),
      averagePages,
      averagePrice: averagePrice.toFixed(2),
      highestRated: highestRated.title,
      oldestBook: `${oldestBook.title} (${oldestBook.publishYear})`,
      calculationTime: calculationTime.toFixed(4),
      microseconds: microseconds.toFixed(2),
      _dummy: dummy, // Prevent optimization from removing our timing code
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
      <div>
        ⏱️ Calculation time: {stats.calculationTime}ms ({stats.microseconds}μs)
      </div>
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
