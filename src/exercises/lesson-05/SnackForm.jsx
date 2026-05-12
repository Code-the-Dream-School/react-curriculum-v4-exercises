import { useState, useEffect } from 'react';
import styles from './SnackForm.module.css';

export default function SnackForm({
  addSnack,
  editingSnack,
  cancelEdit,
  updateSnack,
  className,
}) {
  const isEditing = Boolean(editingSnack);

  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [touched, setTouched] = useState({
    name: false,
    rating: false,
  });

  useEffect(() => {
    if (isEditing) {
      setName(editingSnack.name);
      setRating(editingSnack.rating);
    } else {
      setName('');
      setRating('');
    }

    setTouched({
      name: false,
      rating: false,
    });
  }, [editingSnack, isEditing]);

  const validateName = () => name.trim() !== '';
  const validateRating = () =>
    rating !== '' && Number(rating) >= 1 && Number(rating) <= 5;

  const getNameError = () => {
    if (!touched.name || validateName()) return '';
    return 'Snack name is required';
  };

  const getRatingError = () => {
    if (!touched.rating || validateRating()) return '';
    return 'Please select a rating';
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (!validateName() || !validateRating()) {
      setTouched({
        name: true,
        rating: true,
      });
      return;
    }

    if (isEditing) {
      updateSnack(editingSnack.id, name.trim(), Number(rating));
    } else {
      addSnack(name.trim(), Number(rating));
      setName('');
      setRating('');
      setTouched({
        name: false,
        rating: false,
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} ${className || ''}`}
    >
      <h3 className={styles['form-title']}>
        {isEditing ? '✏️ Edit Snack' : '➕ Add Snack'}
      </h3>

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={() =>
            setTouched((prev) => ({
              ...prev,
              name: true,
            }))
          }
          className={styles['field-input']}
          placeholder="Enter snack name"
        />

        {getNameError() && (
          <div className={styles.errorMessage}>{getNameError()}</div>
        )}
      </div>

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>Rating:</label>
        <input
          type="number"
          name="rating"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          onFocus={() =>
            setTouched((prev) => ({
              ...prev,
              rating: true,
            }))
          }
          className={styles['field-input']}
          placeholder="Enter rating 1-5"
        />

        {getRatingError() && (
          <div className={styles.errorMessage}>{getRatingError()}</div>
        )}
      </div>

      <div className={styles['button-container']}>
        <button
          type="submit"
          className={`${styles.button} ${styles['submit-button']}`}
        >
          {isEditing ? 'Save' : 'Add'}
        </button>

        {isEditing && (
          <button
            type="button"
            onClick={cancelEdit}
            className={`${styles.button} ${styles['cancel-button']}`}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
