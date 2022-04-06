import React from "react"
import {BrowserRouter,Route,Switch} from "react-router-dom"
import AddTaskForm from "./components/TaskForms/AddTaskForm"
import AddTaskGroupForm from "./components/TaskForms/AddTaskGroupForm"
import Grid from "./components/TaskCategoryGrid/Grid"
import TaskCard from "./components/TaskCard/TaskCard"
import DeleteStatus from "./components/DeleteStatus"
import UpdateTaskForm from "./components/TaskForms/UpdateTaskForm"


const Routes = ()=>{
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Grid}/>
                <Route path="/addtask" exact component={AddTaskForm}/>
                <Route path="/updatetask" exact component={UpdateTaskForm}/>
                <Route path="/addcategory" exact component={AddTaskGroupForm}/>
                <Route path="/viewtask" exact component={TaskCard}/>
                <Route path="/deletestatus" exact component={DeleteStatus}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes