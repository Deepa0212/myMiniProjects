// Prototypes
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

Book.prototype.getSummary = function() {
  return `${this.title} was written by ${this.author} in year ${this.year}`;
};

let book1 = new Book("Book One", "John Doe", "2010");

console.log(book1);

Book.prototype.revisedHistory = function(newYear) {
  this.year = newYear;
  this.revised = true;
};

book1.revisedHistory("2019");
console.log(book1);
