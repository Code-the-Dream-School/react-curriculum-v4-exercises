import styles from './SnackForm.module.css';
import { getNameError, getRatingError } from './validationLogic.js';

import React, { useEffect } from 'react';

export default function SnackForm({
  addSnack,
  editingSnack,
  cancelEdit,
  updateSnack,
  className,
}) {
  const [formData, setFormData] = React.useState({
    name: '',
    rating: '',
    touched: { name: false, rating: false },
  });

  useEffect(() => {
    if (editingSnack) {
      setFormData({
        name: editingSnack.name,
        rating: editingSnack.rating,
        touched: { name: false, rating: false },
      });
    } else {
      setFormData({
        name: '',
        rating: '',
        touched: { name: false, rating: false },
      });

      inputRef.current?.focus();
    }
  }, [editingSnack]);

  const inputRef = React.useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    const nameError = getNameError(formData.name, true);
    const ratingError = getRatingError(formData.rating, true);

    if (nameError || ratingError) {
      setFormData((prev) => ({
        ...prev,
        touched: {
          name: true,
          rating: true,
        },
      }));
      return;
    }

    if (editingSnack) {
      updateSnack(editingSnack.id, formData.name, formData.rating);
    } else {
      addSnack(formData.name, formData.rating);
    }

    setFormData({
      name: '',
      rating: '',
      touched: { name: false, rating: false },
    });

    inputRef.current?.focus();
  }

  const nameError = getNameError(formData.name, formData.touched.name);

  const ratingError = getRatingError(formData.rating, formData.touched.rating);

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} ${className || ''}`}
    >
      <h3 className={styles['form-title']}>
        {editingSnack ? '✏️ Edit Snack' : '➕ Add Snack'}
      </h3>

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          className={styles['field-input']}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              name: e.target.value,
            }))
          }
          onFocus={() =>
            setFormData((prev) => ({
              ...prev,
              touched: {
                ...prev.touched,
                name: true,
              },
            }))
          }
          placeholder="Enter snack name"
          ref={inputRef}
        />
        {nameError && <div className={styles.error}>{nameError}</div>}
      </div>

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>Rating:</label>
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              rating: e.target.value,
            }))
          }
          onFocus={() =>
            setFormData((prev) => ({
              ...prev,
              touched: {
                ...prev.touched,
                rating: true,
              },
            }))
          }
          min="1"
          max="5"
          className={styles['field-input']}
          placeholder="Rate 1-5"
        />
        {ratingError && <div className={styles.error}>{ratingError}</div>}
      </div>

      <div className={styles['button-container']}>
        <button
          type="submit"
          className={`${styles.button} ${styles['submit-button']}`}
        >
          {editingSnack ? 'Save' : 'Add'}
        </button>

        {editingSnack && (
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
