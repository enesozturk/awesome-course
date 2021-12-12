export function filterTodos(todos, filterAs) {
  if (!todos) return [];

  switch (filterAs) {
    case "all":
      return todos;
    case "not-completed":
      return todos.filter((todo) => !todo.completed);
    case "completed":
      return todos.filter((todo) => todo.completed);
    default:
      return todos;
  }
}
