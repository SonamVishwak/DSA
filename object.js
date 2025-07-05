function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

const Library = {
  books: [],

  // Add a book to the library
  addBook(book) {
    this.books.push(book);
    console.log(`Book "${book.title}" added to the library.`);
  },

  // List all books
  listBooks() {
    if (this.books.length === 0) {
      console.log("No books in the library.");
      return;
    }
    console.log("Library books:");
    this.books.forEach((book, index) => {
      console.log(`${index + 1}. "${book.title}" by ${book.author} (${book.year})`);
    });
  },

  // Find a book by title
  findBook(title) {
    const found = this.books.find(book => book.title.toLowerCase() === title.toLowerCase());
    if (found) {
      console.log(`Found: "${found.title}" by ${found.author} (${found.year})`);
    } else {
      console.log(`Book titled "${title}" not found.`);
    }
  }
};


const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
const book2 = new Book("1984", "George Orwell", 1949);
Library.addBook(book1);
Library.addBook(book2);
Library.listBooks();
Library.findBook('1984')
