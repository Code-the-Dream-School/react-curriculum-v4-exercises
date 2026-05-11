import { useEffect, useState } from 'react';
import styles from './SnackForm.module.css';

export default function SnackForm({
  addSnack,
  editingSnack,
  cancelEdit,
  updateSnack,
  className,
}) {
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [touched, setTouched] = useState({ name: false, rating: false });
  const isEditing = Boolean(editingSnack);

  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    if (editingSnack) {
      setName(editingSnack.name);
      setRating(String(editingSnack.rating));
    } else {
      setName('');
      setRating('');
    }

    setTouched({ name: false, rating: false });
  }, [editingSnack]);
  /* eslint-enable react-hooks/set-state-in-effect */

  function validateName() {
    return Boolean(name.trim());
  }

  function validateRating() {
    return rating !== '';
  }

  function getNameError() {
    if (!touched.name || validateName()) {
      return '';
    }

    return 'Snack name is required';
  }

  function getRatingError() {
    if (!touched.rating || validateRating()) {
      return '';
    }

    return 'Please select a rating';
  }

  function handleSubmit(e) {
    e.preventDefault();

    const isNameValid = validateName();
    const isRatingValid = validateRating();

    if (!isNameValid || !isRatingValid) {
      setTouched({ name: true, rating: true });
      return;
    }

    if (isEditing) {
      updateSnack(editingSnack.id, name, rating);
    } else {
      addSnack(name, rating);
      setName('');
      setRating('');
      setTouched({ name: false, rating: false });
    }
  }

  const nameError = getNameError();
  const ratingError = getRatingError();

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
          onChange={(event) => setName(event.target.value)}
          onFocus={() => setTouched((prev) => ({ ...prev, name: true }))}
          className={`${styles['field-input']} ${nameError ? styles['input-error'] : ''}`}
          placeholder="Enter snack name"
        />
        {nameError && <div className={styles.error}>{nameError}</div>}
      </div>

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>Rating:</label>
        <input
          type="number"
          name="rating"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
          onFocus={() => setTouched((prev) => ({ ...prev, rating: true }))}
          min="1"
          max="5"
          className={`${styles['field-input']} ${ratingError ? styles['input-error'] : ''}`}
          placeholder="Rate 1-5"
        />
        {ratingError && <div className={styles.error}>{ratingError}</div>}
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
