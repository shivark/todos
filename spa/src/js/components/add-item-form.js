import React, { Component } from "react";
import AddButton from "./add-button";
import AddInput from "./add-input";
import Item from "./item";
import data from "./../../sample-data";

class AdditemForm extends Component {
  constructor() {
    super();
    this.state = {
      todos: data
    };

    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
  }

  handleCheckBoxChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(item => {
        if (item.id === id) {
          item.completed = !item.completed;
        }

        return item;
      });

      return {
        todos: updatedTodos
      };
    });

    console.log("check box clicked with id: ", id);
  }

  render() {
    const todoItems = this.state.todos.map(item => (
      <Item
        handleCheckBoxChange={this.handleCheckBoxChange}
        key={item.id}
        item={item}
      />
    ));

    return (
      <div>
        <AddButton onClickFunction={this.buttonClicked} />
        <AddInput />
        {todoItems}
      </div>
    );
  }
}

export default AdditemForm;
