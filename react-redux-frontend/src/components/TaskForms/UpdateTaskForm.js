import React from "react";
import { useEffect, useState } from "react";
import "./StyleTaskForms.css"
import {updateStorageTask} from "../../LocalStorage/taskStorage";
import {getCategories} from "../../LocalStorage/categoryStorage"
import { useHistory } from "react-router-dom";

const UpdateTaskForm = (props) => {
    let history = useHistory()
    const [data,setData] = useState({
        _categories : [],
        categoryID : "",
        taskID : "",
        currenttask : "",
        currentDescription : "",
        currentDate : "",
        currentCategoryName : ""
    })

    const {_categories,categoryID,taskID,currentTask,currentDescription,currentDate,currentCategoryName} = data

    const loadCategories = () =>{
        let categories = getCategories()
        setData({...data,
            _categories : categories,
            categoryID : props.location.state.categoryID,
            taskID : props.location.state.id,
            currentTask : props.location.state.name,
            currentDate : props.location.state.date,
            currentDescription : props.location.state.description,
            currentCategoryName : props.location.state.categoryName
        })
    }

    useEffect(() =>{
        loadCategories()
    },[])
    const findCategoryById = ()=>{
      let obj = {}
        _categories.map((c,i)=>{
          if(c["id"].localeCompare(categoryID) === 0){
            obj = {
              ...c
            }
          }
        })
        return obj
    }

    
    const formSubmit = (event) =>{
        event.preventDefault()
        
        let updatedTask = {
            id : taskID,
            categoryID : categoryID,
            name : currentTask,
            category : findCategoryById(),
            description : currentDescription,
            date : currentDate
        }
        console.log(updatedTask);
        updateStorageTask(updatedTask)
        setData({
            _categories : [],
            categoryID : "",
            taskID : "",
            currenttask : "",
            currentDescription : "",
            currentDate : "",
            currentCategoryName : ""
        })

        return (
          history.push("/")
        )
        
    }

    const handleChange = (name) => (event) =>{
        setData({...data,[name] : event.target.value,})
    }

  return (
    <div className="form form-body">
      
    <div className="input-container ic1">
        <select className="input" onChange={handleChange("categoryID")}>
        <option value={categoryID} >{currentCategoryName}</option>
          {_categories &&
            _categories.map((c, index) => {
              return (
                <option key={index} value={c.id}>
                  {c.name}
                </option>
              );
            })}
        </select>
      </div>

      <div className="input-container ic1">
        <input id="taskname" className="input" value={currentTask} type="text" placeholder=" " onChange={handleChange("currentTask")}/>
        <div className="cut"></div>
        <label htmlFor="taskname" className="placeholder">
          Task name
        </label>
      </div>

      <div className="input-container ic2">
        <input id="description" className="input" value={currentDescription} type="text" placeholder=" " onChange={handleChange("currentDescription")}/>
        <div className="cut"></div>
        <label htmlFor="description" className="placeholder">
          Task description
        </label>
      </div>

      <div className="input-container ic1">
        <input id="date" className="input" value={currentDate} type="text" placeholder=" " onChange={handleChange("currentDate")}/>
        <div className="cut cut-short"></div>
        <label htmlFor="date" className="placeholder">
          Date
        </label>
      </div>

      <button type="text" className="submit" onClick={formSubmit}>
        submit
      </button>
    </div>
  );
};

export default UpdateTaskForm;