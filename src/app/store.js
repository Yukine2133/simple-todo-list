import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todo/todosSlice";

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;
