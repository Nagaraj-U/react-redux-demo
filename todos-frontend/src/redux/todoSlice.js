import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";

export const getTodosAsync = createAsyncThunk("todos/getAsync", async () => {
  const response = await fetch("http://localhost:9000/todos");
  if (response.ok) {
    const todos = await response.json();
    return { todos };
  }
});
// export const getTodosAsync = createAsyncThunk("todos/getAsync", () => {
//   return fetch("http://localhost:9000/todos").then((response) => {
//     if (response.ok) {
//       const todos = response.json();
//       todos.then((data) => {
//         return data;
//       });
//     }
//   });
// });

export const addTodoAsync = createAsyncThunk(
  "todo/addAsync",
  async (payload) => {
    const response = await fetch("http://localhost:9000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: payload.title }),
    });
    if (response.ok) {
      const newTodo = await response.json();
      return { newTodo };
    }
  }
);
export const toggleCompleteAsync = createAsyncThunk(
  "todos/completeTodoAsync",
  async (payload) => {
    const resp = await fetch(`http://localhost:9000/todos/${payload.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: payload.completed }),
    });

    if (resp.ok) {
      const todo = await resp.json();
      return { todo };
    }
  }
);

export const deleteTodoAsync = createAsyncThunk(
  "todo/deleteAsync",
  async (payload) => {
    const response = await fetch(`http://localhost:9000/todos/${payload.id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      return { id: payload.id };
    }
  }
);

//TODO SLICE
const todoSlice = createSlice({
  name: "todos",
  initialState: [
    {
      id: 1,
      title: "eat egg",
      completed: true,
    },
    {
      id: 2,
      title: "drink milk",
      completed: false,
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Math.random() * 10,
        title: action.payload.title,
        completed: false,
      };
      state.push(newTodo);
    },
    toggleTodo: (state, action) => {
      const index = state.findIndex((todo) => {
        return todo.id === action.payload.id;
      });
      state[index].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => {
        return todo.id !== action.payload.id;
      });
    },
  },
  extraReducers: {
    [getTodosAsync.fulfilled]: (state, action) => {
      console.log("fetched");
      return action.payload.todos;
    },
    [getTodosAsync.pending]: (state, action) => {
      console.log("fetching data...");
    },
    [addTodoAsync.fulfilled]: (state, action) => {
      state.push(action.payload.newTodo);
    },
    [toggleCompleteAsync.fulfilled]: (state, action) => {
      const index = state.findIndex((todo) => {
        return todo.id === action.payload.todo.id;
      });
      console.log(state[index]);
      state[index].completed = action.payload.todo.completed;
    },
    [deleteTodoAsync.fulfilled]: (state, action) => {
      return state.filter((todo) => {
        return todo.id !== action.payload.id;
      });
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
