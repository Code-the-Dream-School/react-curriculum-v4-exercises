//Week-08 Advanced Hooks: useCallback and useMemo, Optimizing a React App
//Exercise: Book Library Dashboard Performance Optimization

import { useState } from 'react';
import { bookData, getAllGenres, filterBooksByGenre } from './bookData.js';
import {
  useRenderCounter,
  RenderCounter,
} from '../../private/components/renderCounter.jsx';
import BookStats from './BookStats.jsx';
import BookList from './BookList.jsx';
import styles from './StudentWork.module.css';

// Main Dashboard Component - Contains performance issues to be optimized
export default function StudentWork() {
  const { count } = useRenderCounter('BookDashboard');

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [sortBy, setSortBy] = useState('title');
  const [favorites, setFavorites] = useState([]);

  const allGenres = getAllGenres();

  // TODO #1: Optimize this search handler with useCallback
  // This function is recreated on every render, causing BookCard re-renders
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // TODO #2: Optimize this favorite toggle handler with useCallback
  // This function is recreated on every render, causing BookCard re-renders
  const handleToggleFavorite = (bookId) => {
    setFavorites((prev) =>
      prev.includes(bookId)
        ? prev.filter((id) => id !== bookId)
        : [...prev, bookId]
    );
  };

  const handleGenreToggle = (genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  // Filter books by search term and selected genres
  let filteredBooks = bookData.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  filteredBooks = filterBooksByGenre(filteredBooks, selectedGenres);

  return (
    <div className={styles.dashboard}>
      <RenderCounter
        componentName="BookDashboard"
        count={count}
        className={styles.renderCounter}
      />

      <h1 className={styles.title}>📚 Professional Book Library Dashboard</h1>

      <div className={styles.performanceNotice}>
        <h3>⚠️ Performance Notice</h3>
        <p>
          This dashboard has performance issues! Watch the render counters on
          the top-right of the component as you interact with the interface.
        </p>
        <p>
          <strong>Try:</strong> Type in the search box, change filters, or click
          buttons and observe the render counts.
        </p>
      </div>

      {/* Statistics and Favorites Section */}
      <div className={styles.statsAndFavorites}>
        <div className={styles.statsSection}>
          <BookStats books={filteredBooks} />
        </div>

        {/* Favorites Summary */}
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
                  const book = bookData.find((b) => b.id === favoriteId);
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

      {/* Search Controls */}
      <div className={styles.searchControls}>
        <h3>Search & Filter Controls</h3>

        <div className={styles.searchGroup}>
          <label className={styles.searchLabel}>Search Books:</label>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search by title or author..."
            className={styles.searchInput}
          />
        </div>

        <div className={styles.searchGroup}>
          <label className={styles.searchLabel}>Sort By:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
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

      {/* Book List */}
      <BookList
        books={filteredBooks}
        searchTerm={searchTerm}
        sortBy={sortBy}
        favorites={favorites}
        onToggleFavorite={handleToggleFavorite}
      />
    </div>
  );
}
