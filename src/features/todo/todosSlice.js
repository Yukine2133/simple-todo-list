import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    todo: "Touch Grass",
  },
  {
    id: "2",
    todo: "Watch anime on  illegal website",
  },
];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoAdded(state, action) {
      state.push(action.payload);
    },
    todoDeleted(state, action) {
      return state.filter((todo) => todo.id !== action.payload);
    },
    todoCompleted(state, action) {
      const todoId = action.payload;
      const todo = state.find((todo) => todo.id === todoId);
      if (todo) {
        todo.completed = true;
      }
    },
  },
});

export const { todoAdded, todoDeleted, todoCompleted } = todosSlice.actions;

export default todosSlice.reducer;
