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

// Main Dashboard Component - Contains performance issues to be optimized
export default function StudentWork() {
  const { count } = useRenderCounter('BookDashboard');

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [sortBy, setSortBy] = useState('title');
  const [favorites, setFavorites] = useState([]);

  const allGenres = getAllGenres();

  // TODO #3: Optimize this search handler with useCallback
  // This function is recreated on every render, causing BookCard re-renders
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // TODO #4: Optimize this favorite toggle handler with useCallback
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
    <div
      style={{
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      <RenderCounter
        componentName="BookDashboard"
        count={count}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          zIndex: 1000,
        }}
      />

      <h1>📚 Professional Book Library Dashboard</h1>

      <div
        style={{
          backgroundColor: '#fff3cd',
          border: '1px solid #ffeaa7',
          borderRadius: '8px',
          padding: '16px',
          margin: '16px 0',
        }}
      >
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

      {/* Statistics Section */}
      <BookStats books={filteredBooks} />

      {/* Search Controls */}
      <div
        style={{
          backgroundColor: '#f8f9fa',
          padding: '16px',
          borderRadius: '8px',
          marginBottom: '20px',
        }}
      >
        <h3>Search & Filter Controls</h3>

        <div style={{ marginBottom: '12px' }}>
          <label
            style={{
              display: 'block',
              marginBottom: '4px',
              fontWeight: 'bold',
            }}
          >
            Search Books:
          </label>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search by title or author..."
            style={{
              width: '100%',
              padding: '8px',
              fontSize: '14px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
        </div>

        <div style={{ marginBottom: '12px' }}>
          <label
            style={{
              display: 'block',
              marginBottom: '4px',
              fontWeight: 'bold',
            }}
          >
            Sort By:
          </label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={{
              padding: '8px',
              fontSize: '14px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          >
            <option value="title">Title</option>
            <option value="author">Author</option>
            <option value="rating">Rating (High to Low)</option>
            <option value="year">Year (Newest First)</option>
            <option value="price">Price (Low to High)</option>
          </select>
        </div>

        <div>
          <label
            style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: 'bold',
            }}
          >
            Filter by Genre:
          </label>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {allGenres.map((genre) => (
              <button
                key={genre}
                onClick={() => handleGenreToggle(genre)}
                style={{
                  padding: '6px 12px',
                  fontSize: '12px',
                  border: '1px solid #007bff',
                  borderRadius: '4px',
                  backgroundColor: selectedGenres.includes(genre)
                    ? '#007bff'
                    : 'white',
                  color: selectedGenres.includes(genre) ? 'white' : '#007bff',
                  cursor: 'pointer',
                }}
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
        onToggleFavorite={handleToggleFavorite}
      />

      {/* Favorites Summary */}
      {favorites.length > 0 && (
        <div
          style={{
            backgroundColor: '#d4edda',
            border: '1px solid #c3e6cb',
            borderRadius: '8px',
            padding: '16px',
            marginTop: '20px',
          }}
        >
          <h3>❤️ Your Favorites ({favorites.length})</h3>
          <p>You have {favorites.length} book(s) in your favorites list.</p>
        </div>
      )}
    </div>
  );
}
