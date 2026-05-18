function TodoForm({ onAddTodo }) {
  const inputRef = useRef();

  const handleAddTodo = (event) => {
    event.preventDefault();
    const todoTitle = event.target.todoTitle.value.trim();

    if (todoTitle) {
      onAddTodo(todoTitle);
      event.target.reset(); // Clear the input
      inputRef.current.focus(); // Keep the cursor blinking in the box!
    }
  };
  return (
    <form>
      <label htmlFor="todoTitle">Todo</label>
      <input type="text" id="todoTitle" />
      <button type="submit" disabled>Add Todo</button>
    </form>
  );
}

export default TodoForm;