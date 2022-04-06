import React from 'react';

function InputBox(props) {
    return (
        <div className="input-container ic1">
                <input id={props.id} className="input" value={newTask} type="text" placeholder=" " onChange={handleChange("newTask")}/>
                <div className="cut"></div>
                <label htmlFor="taskname" className="placeholder">
                Task name
                </label>
        </div>
    );
}

export default InputBox;