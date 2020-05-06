// Classes

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    console.log(
      `${this.title} was written by ${this.author} in year ${this.year}`
    );
  }

  revisedHistory(newYear) {
    this.year = newYear;
    this.revised = true;
    // return `${this.title} was written by ${this.author} in year ${this.year}`;
    this.getSummary();
  }
}

let book2 = new Book("Mommys girl", "Dhruvi", "2019");
console.log(book2.revisedHistory("2020"));
