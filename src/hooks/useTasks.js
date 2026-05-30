import { useEffect, useState } from 'react';

const INITIAL_TASKS = [
  { id: 1, title: 'Learn React', completed: true },
  { id: 2, title: 'Refactor code', completed: false },
  { id: 3, title: 'Organize files', completed: false },
];

/**
 * Custom hook for task loading logic.
 * It manages state and effects, but returns only data.
 */
export default function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTasks(INITIAL_TASKS);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  return { tasks, loading };
}
