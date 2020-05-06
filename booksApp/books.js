class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
// display to UI
class UI {
  static displayBooks() {
    const books = Store.getBooks();
    books.forEach(book => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector("#book-list");

    const row = document.createElement("tr");

    row.innerHTML = `<td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a class="btn btn-danger btn-small delete" href="#">X</a></td>`;

    list.appendChild(row);
  }

  deleteRow(e) {
    if (e.classList.contains("delete")) {
      e.parentElement.parentElement.remove();
    }
  }
  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }

  static showAlerts(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");
    container.insertBefore(div, form);

    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 1000);
  }
}

let newUI = new UI();

class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }
  static addBook(book) {
    let books = Store.getBooks();
    // books.push(book);
    books = [...books, book];
    console.log(books);
    localStorage.setItem("books", JSON.stringify(books));
  }
  static removeBook(isbn) {
    console.log(isbn);
    let books = Store.getBooks();
    // books.map((book, index) => {
    //   book.isbn === isbn ? books.splice(index, 1) : null;
    // });
    books.filter((book, isbn) => book.isbn !== isbn);
    console.log(books);
    localStorage.setItem("books", JSON.stringify(books));
  }
}

// Event: Display Books
document.addEventListener("DOMContentLoaded", UI.displayBooks);

//Event: Add  a Book
document.querySelector("#book-form").addEventListener("submit", e => {
  e.preventDefault();
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let isbn = document.querySelector("#isbn").value;

  //Validate
  if (title === "" || author === "" || isbn === "") {
    UI.showAlerts("Fields should not be empty", "warning");
  } else {
    //Instantiate Book
    const book = new Book(title, author, isbn);

    // Add Book to List
    UI.addBookToList(book);
    console.log(book);

    Store.addBook(book);
    UI.showAlerts("Book added", "success");

    //Clear input fields
    UI.clearFields();
  }
});

// Delete Book from List
document.querySelector("#book-list").addEventListener("click", e => {
  newUI.deleteRow(e.target);
  Store.removeBook(e.target.parentElement.previousElementSibling.innerText);
  UI.showAlerts("Book deleted", "success");
});
