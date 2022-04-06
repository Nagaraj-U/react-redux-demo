import React from "react";
import { useDispatch } from "react-redux";
import { addTodo, addTodoAsync } from "../redux/todoSlice";
import { useState } from "react";

function TodoForm(props) {
  const [todoName, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoName) {
      dispatch(
        addTodoAsync({
          title: todoName,
        })
      );
    }
    setTodo("");
  };
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="mt-5 mb-5">
        <div className="form-group">
          <label>Add new todo</label>
          <input
            type="text"
            className="form-control"
            placeholder="enter todo"
            value={todoName}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          submit
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addTodoAsync } from "../redux/todoSlice";

// const AddTodoForm = () => {
//   const [value, setValue] = useState("");
//   const dispatch = useDispatch();

//   const onSubmit = (event) => {
//     event.preventDefault();
//     if (value) {
//       dispatch(
//         addTodoAsync({
//           title: value,
//         })
//       );
//     }
//   };

//   return (
//     <form onSubmit={onSubmit} className="form-inline mt-3 mb-3">
//       <label className="sr-only">Name</label>
//       <input
//         type="text"
//         className="form-control mb-2 mr-sm-2"
//         placeholder="Add todo..."
//         value={value}
//         onChange={(event) => setValue(event.target.value)}
//       ></input>

//       <button type="submit" className="btn btn-primary mb-2">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default AddTodoForm;
