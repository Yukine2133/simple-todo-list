import { useDispatch, useSelector } from "react-redux";
import Remove, { Completed } from "../icons";
import { todoDeleted, todoCompleted } from "../features/todo/todosSlice";

const TodosList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleTodoCompleted = (todoId) => {
    dispatch(todoCompleted(todoId));
  };

  const renderedTodos = todos.map((todo) => (
    <article
      className={`text-lg border px-3 border-white border-solid mb-4 flex justify-between text-center break-words rounded-lg py-3 ${
        todo.completed ? "text-gray-700 line-through" : ""
      }`}
      key={todo.id}
    >
      <button
        className="transition-all duration-500"
        onClick={() => handleTodoCompleted(todo.id)}
      >
        <Completed />
      </button>
      <h3 className="mx-6">{todo.todo}</h3>
      <button
        className="transition-all duration-500"
        onClick={() => dispatch(todoDeleted(todo.id))}
      >
        <Remove />
      </button>
    </article>
  ));

  return (
    <section className="text-center text-white">
      <h2 className="mb-6 mt-12 text-xl font-medium">Todos</h2>
      {renderedTodos}
    </section>
  );
};

export default TodosList;
