import { useCallback, useMemo, useState } from 'react';
import { bookData, getAllGenres, filterBooksByGenre } from './bookData.js';
import {
  useRenderCounter,
  RenderCounter,
} from '../../private/components/renderCounter.jsx';
import BookStats from './BookStats.jsx';
import BookList from './BookList.jsx';
import styles from './StudentWork.module.css';

export default function StudentWork() {
  const { count } = useRenderCounter('BookDashboard');

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [sortBy, setSortBy] = useState('title');
  const [favorites, setFavorites] = useState([]);

  const allGenres = useMemo(() => {
    // Lesson 08: getAllGenres is derived from static data, so calculate it once.
    return getAllGenres();
  }, []);

  const handleSearch = useCallback((event) => {
    // Lesson 08: useCallback keeps this function reference stable for child components.
    setSearchTerm(event.target.value);
  }, []);

  const handleToggleFavorite = useCallback((bookId) => {
    // Lesson 08: functional state update avoids needing favorites as a dependency.
    setFavorites((previousFavorites) =>
      previousFavorites.includes(bookId)
        ? previousFavorites.filter((id) => id !== bookId)
        : [...previousFavorites, bookId]
    );
  }, []);

  const handleGenreToggle = useCallback((genre) => {
    setSelectedGenres((previousGenres) =>
      previousGenres.includes(genre)
        ? previousGenres.filter((currentGenre) => currentGenre !== genre)
        : [...previousGenres, genre]
    );
  }, []);

  const handleSortChange = useCallback((event) => {
    setSortBy(event.target.value);
  }, []);

  const filteredBooks = useMemo(() => {
    // Lesson 08: filtering creates a new array, so useMemo keeps it stable
    // unless the search term or selected genres actually change.
    const normalizedSearchTerm = searchTerm.toLowerCase();

    const searchFilteredBooks = bookData.filter(
      (book) =>
        book.title.toLowerCase().includes(normalizedSearchTerm) ||
        book.author.toLowerCase().includes(normalizedSearchTerm)
    );

    return filterBooksByGenre(searchFilteredBooks, selectedGenres);
  }, [searchTerm, selectedGenres]);

  return (
    <div className={styles.dashboard}>
      <RenderCounter
        componentName="BookDashboard"
        count={count}
        className={styles.renderCounter}
      />

      <h1 className={styles.title}>📚 Professional Book Library Dashboard</h1>

      <div className={styles.performanceNotice}>
        <h3>✅ Performance Optimized</h3>
        <p>
          This dashboard now uses useCallback, useMemo, and memo to reduce
          unnecessary renders and repeated calculations.
        </p>
        <p>
          <strong>Try:</strong> Type in the search box, change filters, sort
          books, and favorite books while watching the render counters.
        </p>
      </div>

      <div className={styles.statsAndFavorites}>
        <div className={styles.statsSection}>
          <BookStats books={filteredBooks} />
        </div>

        <div className={styles.favoritesSection}>
          {favorites.length > 0 ? (
            <div
              style={{
                backgroundColor: '#d4edda',
                border: '1px solid #c3e6cb',
                borderRadius: '8px',
                padding: '16px',
                height: 'fit-content',
              }}
            >
              <h3>❤️ Your Favorites ({favorites.length})</h3>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '8px 0',
                  borderBottom: '2px solid #c3e6cb',
                  fontWeight: 'bold',
                  fontSize: '14px',
                  marginBottom: '4px',
                }}
              >
                <span>Title</span>
                <span>Remove from Favorites</span>
              </div>

              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0',
                }}
              >
                {favorites.map((favoriteId) => {
                  const book = bookData.find((book) => book.id === favoriteId);

                  return book ? (
                    <li
                      key={book.id}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '4px 0',
                        fontSize: '14px',
                        borderBottom: '1px solid #c3e6cb',
                      }}
                    >
                      <span style={{ flexGrow: 1, paddingRight: '8px' }}>
                        {book.title}
                      </span>

                      <button
                        type="button"
                        onClick={() => handleToggleFavorite(book.id)}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          fontSize: '16px',
                          color: '#6c757d',
                          padding: '2px',
                        }}
                        title="Remove from favorites"
                      >
                        💔
                      </button>
                    </li>
                  ) : null;
                })}
              </ul>
            </div>
          ) : (
            <div className={styles.favoritesEmpty}>
              <h3>❤️ Your Favorites</h3>
              <p>Add books to your favorites to see them here!</p>
            </div>
          )}
        </div>
      </div>

      <div className={styles.searchControls}>
        <h3>Search & Filter Controls</h3>

        <div className={styles.searchGroup}>
          <label className={styles.searchLabel} htmlFor="bookSearch">
            Search Books:
          </label>

          <input
            id="bookSearch"
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search by title or author..."
            className={styles.searchInput}
          />
        </div>

        <div className={styles.searchGroup}>
          <label className={styles.searchLabel} htmlFor="bookSort">
            Sort By:
          </label>

          <select
            id="bookSort"
            value={sortBy}
            onChange={handleSortChange}
            className={styles.sortSelect}
          >
            <option value="title">Title</option>
            <option value="author">Author</option>
            <option value="rating">Rating (High to Low)</option>
            <option value="year">Year (Newest First)</option>
            <option value="price">Price (Low to High)</option>
          </select>
        </div>

        <div>
          <label className={styles.searchLabel}>Filter by Genre:</label>

          <div className={styles.genreFilters}>
            {allGenres.map((genre) => (
              <button
                type="button"
                key={genre}
                onClick={() => handleGenreToggle(genre)}
                className={`${styles.genreButton} ${
                  selectedGenres.includes(genre)
                    ? styles.active
                    : styles.inactive
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
      </div>

      <BookList
        books={filteredBooks}
        sortBy={sortBy}
        favorites={favorites}
        onToggleFavorite={handleToggleFavorite}
      />
    </div>
  );
}
