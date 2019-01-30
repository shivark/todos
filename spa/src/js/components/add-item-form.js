import React, { Component } from "react";
import AddButton from "./add-button";
import AddInput from "./add-input";
import Item from "./item";
import Loader from "./loader";

class AdditemForm extends Component {
  constructor() {
    super();
    this.state = {
      todos: null
    };

    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
  }

  componentDidMount() {
    fetch("./sample-data.json")
      .then(res => res.json())
      .then(data => this.setState({ todos: data.todos }));
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
  }

  getItems() {
    return this.state.todos.map(item => (
      <Item
        handleCheckBoxChange={this.handleCheckBoxChange}
        key={item.id}
        item={item}
      />
    ));
  }

  render() {
    return (
      <div>
        <AddButton onClickFunction={this.buttonClicked} />
        <AddInput />
        {this.state.todos ? this.getItems() : <Loader />}
      </div>
    );
  }
}

export default AdditemForm;
