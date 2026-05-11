import { useEffect, useState } from 'react';

const INITIAL_TASKS = [
  { id: 1, title: 'Learn React', completed: true },
  { id: 2, title: 'Refactor code', completed: false },
  { id: 3, title: 'Organize files', completed: false },
];

export default function useLesson06Tasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTasks(INITIAL_TASKS);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return { tasks, loading };
}
