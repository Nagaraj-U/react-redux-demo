import React from 'react';
import { useHistory } from 'react-router-dom';

const styles = {
    marginTop : "200px",
}

const btnStyle = {
    marginTop : "40px",
}
function DeleteStatus(props) {
    let history = useHistory()
    return (
        <div>
            <h2 style={styles}>OOPS!! No more {props.location.state.type} left</h2>

            <button style={btnStyle} className='btn btn-primary btn-block' onClick={()=>{
                    history.push("/")
            }}>Go To Home</button>

            <button style={btnStyle} className='btn btn-primary btn-block' onClick={()=>{
                history.push("/addtask")
            }}>Create new Task</button>
            
            <button style={btnStyle} className='btn btn-primary btn-block' onClick={()=>{
                    history.push("/addcategory")
                }}>Create new Category</button>

            </div>

            
    );
}

export default DeleteStatus;