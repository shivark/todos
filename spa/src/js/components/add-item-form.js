import React from "react";
import AddButton from "./add-button";
import AddInput from "./add-input";
import Item from "./item";

class AdditemForm extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  //   buttonClicked = () => {
  //     alert("button clicked");
  //   };

  render() {
    return (
      <div>
        <AddButton onClickFunction={this.buttonClicked} />
        <AddInput />
        <Item title="First item to do" />
      </div>
    );
  }
}

export default AdditemForm;
