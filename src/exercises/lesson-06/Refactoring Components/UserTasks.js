import { useState, useEffect } from 'react';

export function useTasks() {

const [tasks, setTasks] = useState([]);


const [loading, setLoading] = useState(true);

useEffect(() => {


const timeoutId = setTimeout(() => {

  setTasks([
    {
      id: 1,
      title: 'Learn React',
      completed: true
    },
    {
      id: 2,
      title: 'Refactor code',
      completed: false
    },
    {
      id: 3,
      title: 'Organize files',
      completed: false
    }
  ]);

  setLoading(false);

}, 500);

// cleanup just in case component unmounts
return () => {
  clearTimeout(timeoutId);
};

}, []);

return {
tasks,
loading
};

}