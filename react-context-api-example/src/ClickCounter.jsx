import React, { Component } from "react";

const ClickCounter = props => {
  console.log(props);
  const { counter, handleCounter } = props;
  return <button onClick={handleCounter}>{counter}</button>;
};

export default ClickCounter;
