import React from "react";

// const displayHint = () => {
//   alert("this is a hint");
// };

const displayHint = () => {
  console.log("HELLO");
};

const Item = props => {
  console.log(props);
  return (
    <div>
      <input
        type="checkbox"
        onChange={() => props.handleCheckBoxChange(props.item.id)}
        checked={props.item.completed}
      />
      <label onMouseOver={displayHint}>{props.item.title}</label>
    </div>
  );
};

export default Item;
