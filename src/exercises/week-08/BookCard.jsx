import {
  useRenderCounter,
  RenderCounter,
} from '../../private/components/renderCounter.jsx';
import styles from './BookCard.module.css';

function BookCard({ book, isFavorite, onToggleFavorite }) {
  const { count } = useRenderCounter('BookCard');

  return (
    <div className={styles.cardContainer}>
      <RenderCounter
        componentName="BookCard"
        count={count}
        className={styles.renderCounter}
      />
      <h3 className={styles.cardTitle}>{book.title}</h3>
      <p className={styles.cardAuthor}>
        by {book.author} ({book.publishYear})
      </p>
      <p className={styles.cardGenres}>Genres: {book.genres.join(', ')}</p>
      <p className={styles.cardDetails}>
        Rating: ⭐ {book.rating} | Pages: {book.pages} | Price: ${book.price}
      </p>
      <button
        onClick={() => onToggleFavorite(book.id)}
        className={`${styles.favoriteButton} ${isFavorite ? styles.remove : styles.add}`}
      >
        {isFavorite ? '💔 Remove from Favorites' : '❤️ Add to Favorites'}
      </button>
    </div>
  );
}

export default BookCard;
