import React from 'react';
import AddButton from "../Buttons/AddButton";
import DeleteButton from "../Buttons/DeleteButton";
function CategoryGrid(props) {
    return (
        <div className="taskGrid">
                <h3>Categories</h3>
                <AddButton taskFlag={false} categoryFlag={true} description={"Add New Category"}/>
                <DeleteButton taskFlag={false} categoryFlag={true} description={"Delete All Categories"}/>
        </div>
    );
}

export default CategoryGrid;