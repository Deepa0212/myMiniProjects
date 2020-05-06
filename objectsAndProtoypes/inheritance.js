// Inheritance
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// getSummary
Book.prototype.getSummary = function() {
  return `${this.title} was written by ${this.author} in year ${this.year}`;
};

//Magazine Constructor
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year, month);
  this.month = month;
}

// Magazine.prototype = Book.prototype;
// To add getSUmmary to Magazine..we need to inherit prototype
Magazine.prototype = Object.create(Book.prototype);

//Instantiate Magazine
let mag1 = new Magazine("Mommys girl", "Dhruvi", "2019", "september");

//Use Magazine Constructor
Magazine.prototype.constructor = Magazine;
console.log(mag1); // Magazine {title: "Mommys girl", author: "Dhruvi", year: "2019", month: "september"}
// console.log(mag1.getSummary()); //  TypeError: mag1.getSummary is not a function...without line 21

console.log(mag1.getSummary());
console.log(mag1);
