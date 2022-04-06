import React from "react";
import { ReactDOM } from "react";
import { useEffect,useState } from "react";
import { categories,tasks} from "../../resource";
import "./StyleTaskForms.css"
import { v4 as uuidv4 } from 'uuid';
import {addCategory,getCategories} from "../../LocalStorage/categoryStorage"
import { useHistory } from "react-router-dom";

const AddTaskGroupForm = ()=>{
    let history = useHistory()
    const [category,setCategory] = useState("")

    const handleChange = (e)=>{
        setCategory(e.target.value)
    }

    const formSubmit = (e)=>{
        e.preventDefault()
        let newCategory = {
            id : uuidv4(),
            name : category
        }
        console.log(newCategory);
        addCategory(newCategory)
        console.log(getCategories());

        return (
            history.push("/")
        )
    }
    return (
        <div className="form form-body">

            <div className="input-container ic1">
                <input id="category-name" className="input" value={category} type="text" placeholder=" " onChange={handleChange}/>
                <div className="cut"></div>
                <label htmlFor="category-name" className="placeholder">
                Category Name
                </label>
            </div>


            <button type="text" className="submit" onClick={formSubmit}>
                submit
            </button>
        </div>
    )
}

export default AddTaskGroupForm;