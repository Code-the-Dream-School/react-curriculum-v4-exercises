function TodoList() {
  const todoList = [
    { id: 1, title: "Review resources" },
    { id: 2, title: "Take notes" },
    { id: 3, title: "Code out app" },
  ];

  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

import TodoListItem from './TodoListItem';

function TodoList({ todoList }) {
  return (
    <ul>
      {todoList.map((todo) => (
        // Pass each individual todo to the child component
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

function TodoListItem({ todo }) {
  return (
    <li>{todo.title}</li>
  );
}

export default TodoListItem;
export default TodoList;