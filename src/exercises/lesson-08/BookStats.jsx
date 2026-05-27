import { useMemo } from 'react';

import {
  useRenderCounter,
  RenderCounter,
} from '../../private/components/renderCounter.jsx';

import styles from './BookStats.module.css';

function BookStats({ books }) {
  const { count } = useRenderCounter('BookStats');

  const stats = useMemo(() => {
    const startTime = Date.now();

    for (let i = 0; i < 20000; i++) {
      Math.sqrt(i);
    }

    const totalBooks = books.length;

    const averageRating =
      totalBooks > 0
        ? books.reduce((sum, book) => sum + book.rating, 0) / totalBooks
        : 0;

    const averagePages =
      totalBooks > 0
        ? Math.round(
            books.reduce((sum, book) => sum + book.pages, 0) / totalBooks
          )
        : 0;

    const averagePrice =
      totalBooks > 0
        ? books.reduce((sum, book) => sum + book.price, 0) / totalBooks
        : 0;

    const highestRated =
      totalBooks > 0
        ? books.reduce((prev, current) =>
            prev.rating > current.rating ? prev : current
          ).title
        : 'No books available';

    const oldestBook =
      totalBooks > 0
        ? books.reduce((prev, current) =>
            prev.publishYear < current.publishYear ? prev : current
          )
        : null;

    const endTime = Date.now();

    return {
      totalBooks,
      averageRating: averageRating.toFixed(1),
      averagePages,
      averagePrice: averagePrice.toFixed(2),
      highestRated,
      oldestBook: oldestBook
        ? `${oldestBook.title} (${oldestBook.publishYear})`
        : 'No books available',
      calculationTime: endTime - startTime,
    };
  }, [books]);

  return (
    <div className={styles.statsContainer}>
      <RenderCounter
        componentName="BookStats"
        count={count}
        className={styles.renderCounter}
      />

      <div>Calculation time: {stats.calculationTime}ms</div>

      <h3 className={styles.statsTitle}>Library Statistics</h3>

      <div className={styles.statsGrid}>
        <div className={styles.statItem}>
          <div className={styles.statLabel}>Total Books</div>
          <div className={styles.statValue}>{stats.totalBooks}</div>
        </div>

        <div className={styles.statItem}>
          <div className={styles.statLabel}>Average Rating</div>
          <div className={styles.statValue}>{stats.averageRating}</div>
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
