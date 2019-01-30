import React from "react";

const Item = props => {
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  };

  return (
    <div>
      <input
        type="checkbox"
        onChange={() => props.handleCheckBoxChange(props.item.id)}
        checked={props.item.completed}
      />
      <label style={props.item.completed ? completedStyle : null}>
        {props.item.title}
      </label>
    </div>
  );
};

export default Item;
