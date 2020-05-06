import React, { Component } from "react";
import Counter from "./Counter.jsx";
import PropTypes from "prop-types";
import ClickCounter from "./ClickCounter.jsx";
import { Room } from "./RoomStore.jsx";
import ToDo from "./ToDo.jsx";

export const Sample = props => {
  const { counter } = props;
  return <p>{`Example with render props ${counter}`}</p>;
};

class App extends Component {
  render() {
    return (
      <div>
        <Counter
          render={(counter, handleCounter) => (
            <div>
              <p>{counter}</p>
              <ClickCounter counter={counter} handleCounter={handleCounter} />
              <Sample counter={counter} />
              <Room />
            </div>
          )}
        ></Counter>
        <ToDo />
      </div>
    );
  }
}

export default App;
