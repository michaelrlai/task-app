import React from "react";

const Overview = (props) => {
  return (
    <ul>
      {props.tasks.map((task) => {
        return <li>{task}</li>;
      })}
    </ul>
  );
};

export default Overview;
