import React, { Component } from "react";

const RoomContext = React.createContext();

export class RoomStore extends Component {
  state = {
    isLit: false
  };
  toggleLight = () => {
    this.setState(state => ({ isLit: !state.isLit }));
  };

  render() {
    return (
      <RoomContext.Provider
        value={{ isLit: this.state.isLit, onToggleLight: this.toggleLight }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

export const Room = props => {
  <RoomContext.Consumer>{props.children}</RoomContext.Consumer>;
};
