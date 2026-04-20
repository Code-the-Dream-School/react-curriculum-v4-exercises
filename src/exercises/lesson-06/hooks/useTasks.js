import { useEffect, useState } from 'react';
import { tasks } from '../utils/tasks.js';

export default function useTasks() {
  const [checkListState, setCheckListState] = useState({
    tasks: [],
    loading: true,
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCheckListState((prevState) => ({
        ...prevState,
        tasks: tasks,
        loading: false,
      }));
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return checkListState;
}
