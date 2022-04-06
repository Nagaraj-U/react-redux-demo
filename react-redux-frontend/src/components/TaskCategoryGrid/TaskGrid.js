import React, { useState } from 'react';
import AddButton from "../Buttons/AddButton";
import DeleteButton from "../Buttons/DeleteButton";
function TaskGrid(props) {
    return (
        <div className="taskGrid">
                <h3>Tasks</h3>
                <AddButton taskFlag={true} categoryFlag={false} description={"Add New Task"}/>
                <DeleteButton taskFlag={true} categoryFlag={false} description={"Delete All Tasks"}/>
        </div>
    );
}

export default TaskGrid;