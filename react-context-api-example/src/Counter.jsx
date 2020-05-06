import React, { Component } from "react";

// const Counter = props => {
//   return <div>{props.counter()}</div>;
// };

// Counter.prototype = {
//   counter: PropTypes.string.isRequired
// };

// export default Counter;

class Counter extends Component {
  state = {
    counter: 0
  };
  handleCounter = prevState => {
    console.log("clicked", this.state);
    // let counter = this.state.counter;
    // counter = counter + 1;
    this.setState(state => ({ counter: state.counter + 1 }));
  };
  render() {
    const { counter } = this.state;
    console.log(this.state, this.handleCounter);
    return <div>{this.props.render(counter, this.handleCounter)}</div>;
  }
}

export default Counter;
