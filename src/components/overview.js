import React from "react";
import uniqid from "uniqid";

const Overview = (props) => {
  console.log(props.tasks);
  return (
    <ul>
      {props.tasks.map((task, index) => {
        return (
          <li key={uniqid()} id={task}>
            {index + 1}. {task}
            <button onClick={props.onDeleteButton}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Overview;
