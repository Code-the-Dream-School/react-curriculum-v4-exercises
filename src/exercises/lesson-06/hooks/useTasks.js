import { useEffect, useState } from 'react';

export function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fakeTasks = [
      { id: 1, title: 'Review resources', completed: true },
      { id: 2, title: 'Take notes', completed: false },
      { id: 3, title: 'Code out app', completed: false },
    ];

    setTasks(fakeTasks);
    setLoading(false);
  }, []);

  return { tasks, loading };
}
