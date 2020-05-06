// Display list of books stored
class Filters {}

// display to UI
class View {
  static displayBooksList() {
    const StatesList = [
      "California",
      "Texas",
      "Pennsylvania",
      "Alaska",
      "NewYork"
    ];
    const states = StatesList;
    // states.map(state => View.addToListDisplay(state));
    View.addToListDisplay(states);
  }
  static addToListDisplay = states => {
    console.log(states);
    const section = document.querySelector("#list");
    states.forEach(state => {
      const list = document.createElement("li");
      list.innerHTML = state;
      section.appendChild(list);
    });
  };
  static addState = title => {
    const section = document.querySelector("#list");
    const list = document.createElement("li");
    list.innerHTML = title;
    section.appendChild(list);
  };
  static search = key => {
    const states = ["California", "Texas", "Pennsylvania", "Alaska", "NewYork"];

    states.map((state, index) => {
      state.toLowerCase() === key ? states.splice(index, 1) : states;
    });
    console.log(states);
    View.addToListDisplay(states);
  };
}

document.addEventListener("DOMContentLoaded", View.displayBooksList);
document.querySelector("#add").addEventListener("click", e => {
  e.preventDefault();
  let title = document.querySelector("#userInput").value;
  View.addState(title);
});
document.querySelector("#search").addEventListener("click", e => {
  e.preventDefault();
  let key = document.querySelector("#userInput").value;
  console.log(key);
  View.search(key);
});
