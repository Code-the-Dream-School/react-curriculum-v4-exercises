import { useState } from 'react';
import SnackForm from './SnackForm';
import styles from './SnackManager.module.css';

export default function SnackManager() {
  const [snacks, setSnacks] = useState([
    { id: 1, name: 'Chocolate Chip Cookies', rating: 5 },
    { id: 2, name: 'Apple Slices', rating: 3 },
    { id: 3, name: 'Trail Mix', rating: 4 },
  ]);

  const [nextId, setNextId] = useState(4);
  const [editingSnack, setEditingSnack] = useState(null);

  function addSnack(name, rating) {
    const newSnack = {
      id: nextId,
      name: name.trim(),
      rating: parseInt(rating, 10),
    };
    setSnacks([...snacks, newSnack]);
    setNextId(nextId + 1);
  }

  function updateSnack(id, name, rating) {
    setSnacks(
      snacks.map((snack) =>
        snack.id === id
          ? { ...snack, name: name.trim(), rating: parseInt(rating, 10) }
          : snack
      )
    );
    setEditingSnack(null);
  }

  function deleteSnack(id) {
    setSnacks(snacks.filter((snack) => snack.id !== id));
    if (editingSnack && editingSnack.id === id) {
      setEditingSnack(null);
    }
  }

  function startEdit(snack) {
    setEditingSnack(snack);
  }

  function cancelEdit() {
    setEditingSnack(null);
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Snack Manager</h2>

      <SnackForm
        addSnack={addSnack}
        editingSnack={editingSnack}
        cancelEdit={cancelEdit}
        updateSnack={updateSnack}
        className={styles['exercise-area']}
      />

      <div className={styles['snacks-section']}>
        <h3 className={styles['snacks-title']}>
          Current Snacks ({snacks.length})
        </h3>
        {snacks.length === 0 ? (
          <p className={styles['empty-message']}>
            No snacks yet. Add one above!
          </p>
        ) : (
          <div className={styles['snacks-list']}>
            {snacks.map((snack) => (
              <div
                key={snack.id}
                className={`${styles['snack-item']} ${editingSnack && editingSnack.id === snack.id ? styles['snack-item-editing'] : ''}`}
              >
                <div className={styles['snack-info']}>
                  <div className={styles['snack-name']}>{snack.name}</div>
                  <div className={styles['snack-rating']}>
                    Rating: {'⭐'.repeat(snack.rating)} ({snack.rating}/5)
                  </div>
                </div>
                <div className={styles['snack-actions']}>
                  <button
                    onClick={() => startEdit(snack)}
                    className={`${styles['action-button']} ${styles['edit-button']}`}
                    disabled={editingSnack !== null}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteSnack(snack.id)}
                    className={`${styles['action-button']} ${styles['delete-button']}`}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
