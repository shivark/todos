import React from "react";

const Item = props => {
  return (
    <div>
      <input
        type="checkbox"
        onChange={() => props.handleCheckBoxChange(props.item.id)}
        checked={props.item.completed}
      />
      <label>{props.item.title}</label>
    </div>
  );
};

export default Item;
