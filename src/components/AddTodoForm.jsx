import { useState } from "react";
import { useDispatch } from "react-redux";

import { todoAdded } from "../features/todo/todosSlice";
import { nanoid } from "nanoid";

const AddTodoForm = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const onTodoChanged = (e) => setTodo(e.target.value);

  const onAddTodoClicked = () => {
    if (todo) {
      dispatch(
        todoAdded({
          id: nanoid(),
          todo,
        })
      );

      setTodo("");
    }
  };

  return (
    <section className="mb-6 text-white">
      <form className="grid grid-cols-1 " onClick={(e) => e.preventDefault()}>
        <input
          className="text-black px-4 py-3 rounded-md"
          type="text"
          id="postTodo"
          name="postTodo"
          value={todo}
          onChange={onTodoChanged}
          placeholder="New Todo"
        />
        <button
          className=" mt-4 bg-orange-500 text-white px-4 py-3 rounded-lg hover:bg-white hover:text-black transition-all duration-500 font-bold"
          onClick={onAddTodoClicked}
        >
          Add Todo
        </button>
      </form>
    </section>
  );
};

export default AddTodoForm;
