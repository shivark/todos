import React, { Component } from "react";
import AddButton from "./add-button";
import AddInput from "./add-input";
import Item from "./item";
import Loader from "./loader";

class AdditemForm extends Component {
  constructor() {
    super();
    this.state = {
      newItem: "",
      todos: null
    };

    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
    this.textInputChanged = this.textInputChanged.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      fetch("./sample-data.json")
        .then(res => res.json())
        .then(data => this.setState({ todos: data.todos }));
    }, 1500);
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

  buttonClicked() {
    console.log("Button clicked!");
  }

  textInputChanged(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <AddButton handleOnClick={this.buttonClicked} />
        <AddInput
          newItemValue={this.state.newItem}
          handleOnChange={this.textInputChanged}
        />
        {this.state.todos ? this.getItems() : <Loader />}
      </div>
    );
  }
}

export default AdditemForm;
