import React from "react";
import { ReactDOM } from "react";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { deleteCategories } from "../../LocalStorage/categoryStorage";
import { deleteTasks } from "../../LocalStorage/taskStorage";
const DeleteButton = (props) => {
  let history = useHistory();
  const handleSubmit = () => {
    if (props.taskFlag){
      deleteTasks();
      history.push({
        pathname : "/deletestatus",
        state : {
          type : "tasks"
        }
      })
    } else {
      deleteCategories();
      history.push({
        pathname : "/deletestatus",
        state : {
          type : "categories"
        }
      })
    }
    
  };
  return (
    <div className="button">
      <button className="btn btn-info btn-block" onClick={handleSubmit}>
        <i className="fa fa-minus"></i> {props.description}
      </button>
    </div>
  );
};

export default DeleteButton;
