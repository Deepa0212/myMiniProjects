import React, { Component } from "react";

export default class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "Preparation for breakfast",
      itemsArray: ["a", "b"]
    };
  }
  handleValueChange = e => {
    const value = e.target.value;
    this.setState({ item: value });
  };
  handleSubmit = () => {
    let itemsArray = [...this.state.itemsArray, this.state.item];
    this.setState({ itemsArray, item: "" });
  };
  handleDelete = item => {
    let itemsArray = this.state.itemsArray.filter(todo => todo !== item);
    this.setState({ itemsArray });
  };
  render() {
    const { itemsArray } = this.state;
    return (
      <div>
        <h3>To Do List</h3>
        <input
          onChange={this.handleValueChange}
          name="todoItem"
          value={this.state.item}
        ></input>
        <input onClick={this.handleSubmit} type="submit" />
        <ul>
          {itemsArray.map(item => (
            <li key={item} onClick={() => this.handleDelete(item)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
