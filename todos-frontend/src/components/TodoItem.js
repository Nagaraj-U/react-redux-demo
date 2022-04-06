import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  toggleTodo,
  toggleCompleteAsync,
  deleteTodoAsync,
} from "../redux/todoSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(
      toggleCompleteAsync({
        id: id,
        completed: !completed,
      })
    );
  };

  const handleClick = () => {
    dispatch(
      deleteTodoAsync({
        id: id,
      })
    );
  };
  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input
            type="checkbox"
            className="mr-3"
            checked={completed}
            onChange={handleChange}
          ></input>
          {title}
        </span>
        <button onClick={handleClick} className="btn btn-danger">
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
