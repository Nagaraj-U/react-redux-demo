import React from "react";
import "./TaskCardStyle.css";
function TaskCard(props) {
    const styles = {
        maxWidth : "50rem",
        marginTop : "200px"   
    }
  return (
    
    <div className="card text-white bg-dark mb-3" style={styles}>
      <div className="card-header"><h3>Category : {props.location.state.category}</h3></div>
      <div className="card-body">
        <h5 className="card-title">Task Name : {props.location.state.name}</h5><br/>
        <h5 className="card-title">Task Date : {props.location.state.date}</h5><br/>
        <p className="card-text">
          <h5>Task Description - </h5>
          <br />
            <em>Some quick example text to build on the card title and make up the
            bulk of the card's content. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took
            a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
            </em>
        </p>
      </div>
    </div>
  );
}

export default TaskCard;
