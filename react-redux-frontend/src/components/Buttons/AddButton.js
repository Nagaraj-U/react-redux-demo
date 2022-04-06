import React, { useEffect, useState } from "react"
import { ReactDOM } from "react";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
const AddButton = (props)=>{

    // const redirect = ()=>{
    //     return (
    //         <Redirect to="/addtask/" />
    //     )
    // }
    const handClick = () => {
        if(props.taskFlag){
            history.push("/addtask");
        }else{
            history.push("/addcategory")
        }
    }
    let history = useHistory()
    return (
        <div className="button">
            <button className="btn btn-success btn-block" onClick={handClick}>
            <i className="fa fa-plus"></i> {props.description}
            </button>
        </div> 
    )
}

export default AddButton