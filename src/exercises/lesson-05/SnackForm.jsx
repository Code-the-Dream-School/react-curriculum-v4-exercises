import styles from './SnackForm.module.css';
import { useState, useEffect } from 'react';
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
  const [touched, setTouched] = useState({ name: false, rating: false });
  // touched = false  →  hide error ✅  (user hasn't tried yet)
  // touched = true   →  show error ✅  (user has interacted)

  useEffect(() => {
    if (editingSnack) {
      setName(editingSnack.name); //fill with current values
      setRating(editingSnack.rating); //fill with current values
    } else {
      setName(''); //reset to empty
      setRating(''); //reset to empty
    }
    setTouched({ name: false, rating: false }); //reset touched
  }, [editingSnack]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!validateName() || !validateRating()) {
      //if it is empty
      setTouched({ name: true, rating: true }); //touched -> errors show for ALL empty fields
      return;
    }
    // user hits submit with empty fields → setTouched({ name: true, rating: true })
    // Forcing touched: true on submit makes all error messages appear even if user never clicked the fields!

    if (isEditing) {
      //if it is false
      updateSnack(editingSnack.id, name, rating);
    } else {
      addSnack(name, rating);
      setName('');
      setRating('');
      setTouched({ name: false, rating: false });
    }
  }

  function validateName() {
    return name.trim() !== '';
  }

  function validateRating() {
    return rating !== '';
  }

  function getNameError() {
    if (name === '' && touched.name) {
      return 'Snack name is required';
    }
  }
  function getRatingError() {
    if (rating === '' && touched.rating) {
      return 'Please select a rating';
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
          className={styles['field-input']}
          placeholder="Enter snack name"
          onChange={(e) => setName(e.target.value)}
          onFocus={() => setTouched((prev) => ({ ...prev, name: true }))} //true  = user has clicked here/user clicks INTO name input → onFocus → touched.name = true
        />
      </div>
      {getNameError() && <div className={styles.error}>{getNameError()}</div>}

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>Rating:</label>
        <input
          type="number"
          name="rating"
          value={rating}
          min="1"
          max="5"
          className={styles['field-input']}
          placeholder="Rate 1-5"
          onChange={(e) => setRating(e.target.value)}
          onFocus={() => setTouched((prev) => ({ ...prev, rating: true }))} //true  = user has clicked here
        />
      </div>
      {getRatingError() && (
        <div className={styles.error}>{getRatingError()}</div>
      )}
      {/* getRatingError()  →  is there an error?
       && →  yes? show it! no? hide it! */}

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
