// import { todos } from "./todos";
import TodoItem from "./TodoItem";
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodosAsync } from "../redux/todoSlice";
function DisplayTodos(props) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  return (
    <ul className="list-group">
      {todos &&
        todos.map((todo) => (
          <TodoItem
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        ))}
    </ul>
  );
}

export default DisplayTodos;
