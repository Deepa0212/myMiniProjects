import React from "react";
import { render } from "react-dom";
import App from "./App.jsx";
import { RoomStore } from "./RoomStore.jsx";

// function Hi() {
//   return <p>Hi.</p>;
// }

render(
  <RoomStore>
    <App />
  </RoomStore>,
  document.getElementById("app")
);
