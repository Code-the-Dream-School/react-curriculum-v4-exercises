import {
  useRenderCounter,
  RenderCounter,
} from '../../private/components/renderCounter.jsx';
import styles from './BookCard.module.css';
import { memo } from 'react';

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

export default memo(BookCard); //for test -> "Individual BookCard components don't re-render when other BookCards are favorited"

// without memo
// click "Add to Favorites" on book #1
//       ↓
// favorites state changes
//       ↓
// StudentWork re-renders
//       ↓
// ALL BookCards re-render ❌
// even book #2, #3, #4... that didn't change!

// with memo
// click "Add to Favorites" on book #1
//       ↓
// favorites state changes
//       ↓
// StudentWork re-renders
//       ↓
// memo checks each BookCard's props
//       ↓
// book #1 props changed → re-renders ✅
// book #2, #3, #4... props same → skip ✅

// useMemo      = sticky note for CALCULATION 📝
//                "I already calculated this!"

// useCallback  = sticky note for FUNCTION 📝
//                "I already created this function!"

// memo         = sticky note for COMPONENT 📝
//                "I already rendered this!"
