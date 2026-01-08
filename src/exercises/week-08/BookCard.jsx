import {
  useRenderCounter,
  RenderCounter,
} from '../../private/components/renderCounter.jsx';

// Individual Book Card Component - Will re-render unnecessarily without optimization
function BookCard({ book, onToggleFavorite }) {
  const { count } = useRenderCounter('BookCard');

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '16px',
        margin: '8px',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
        position: 'relative',
      }}
    >
      <RenderCounter
        componentName="BookCard"
        count={count}
        style={{
          position: 'absolute',
          top: '8px',
          right: '8px',
          zIndex: 1000,
        }}
      />
      <h3 style={{ margin: '0 0 8px 0' }}>{book.title}</h3>
      <p style={{ margin: '4px 0', fontSize: '14px', color: '#666' }}>
        by {book.author} ({book.publishYear})
      </p>
      <p style={{ margin: '4px 0', fontSize: '14px' }}>
        Genres: {book.genres.join(', ')}
      </p>
      <p style={{ margin: '4px 0', fontSize: '14px' }}>
        Rating: ⭐ {book.rating} | Pages: {book.pages} | Price: ${book.price}
      </p>
      <button
        onClick={() => onToggleFavorite(book.id)}
        style={{
          padding: '8px 12px',
          marginTop: '8px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        ❤️ Add to Favorites
      </button>
    </div>
  );
}

export default BookCard;
