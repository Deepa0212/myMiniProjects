// Constructor

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  this.getSummary = function() {
    return `${this.title} was written by ${this.author} in year ${this.year}`;
  };
}

let book1 = new Book("Book One", "John Doe", "2010");
let book2 = new Book("Book Two", "William Smith", "2015");

console.log(book1);
console.log(book2.getSummary());
