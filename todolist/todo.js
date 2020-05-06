// display item to list
class DisplayToDo {
  getToDoList() {
    let todoArray;
    todoArray = myStore.getList();
    todoArray.map(todo => {
      let listItem = document.querySelector("#menulist");
      let list = document.createElement("li");
      list.innerHTML = todo;
      listItem.appendChild(list);
    });
    return todoArray;
  }

  addToDoItemToList(todo) {
    //display to UI
    let listItem = document.querySelector("#menulist");
    let list = document.createElement("li");
    list.innerHTML = todo;
    listItem.appendChild(list);
    myStore.setList(todo);
  }
  clearInput() {
    document.querySelector("#inputTodo").value = "";
  }
  deleteItem(el) {
    el.remove();
  }
}

class Store {
  getList() {
    let todoArray;
    if (localStorage.getItem("todoArray") === null) {
      todoArray = [];
    } else {
      todoArray = JSON.parse(localStorage.getItem("todoArray"));
    }
    return todoArray;
  }
  setList(todo) {
    let todoArray = myStore.getList();
    todoArray = [...todoArray, todo];
    localStorage.setItem("todoArray", JSON.stringify(todoArray));
  }
  removeList(el) {
    let todoArray = myStore.getList();
    todoArray.filter((todo, index) => {
      todo === el.innerText ? todoArray.splice(index, 1) : null;
    });
    localStorage.setItem("todoArray", JSON.stringify(todoArray));
  }
}

let myStore = new Store();

// Instantiate class
let displayItem = new DisplayToDo();
document.addEventListener("DOMContentLoaded", displayItem.getToDoList);

document.querySelector("#submit").addEventListener("click", () => {
  let todo = document.querySelector("#inputTodo").value;
  displayItem.addToDoItemToList(todo);
  displayItem.clearInput();
});

document.querySelector("#listItem").addEventListener("click", e => {
  displayItem.deleteItem(e.target);
  myStore.removeList(e.target);
});
