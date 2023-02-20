import Book from './modules/book.js'
import { nevigateTo } from './modules/navigate.js';
import { Store } from './modules/store.js';

class UI {
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('.table-body');

    const tableRow = document.createElement('tr');

    tableRow.innerHTML = `
           <td>${book.title}</td>
           <td class= "td-by">  By ${book.author}</td>
           <td ><a href="#" class="remove-btn">Remove</a></td>
        `;

    list.appendChild(tableRow);
  }

  static empty() {
    document.querySelector('.title').value = '';
    document.querySelector('.author').value = '';
  }

  static deleteBook(e) {
    if (e.classList.contains('remove-btn')) {
      e.parentElement.parentElement.remove();
    }
  }
}

// event:Display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

document.querySelector('.add-book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('.title').value;
  const author = document.querySelector('.author').value;

  const book = new Book(title, author);

  // add book to UI
  UI.addBookToList(book);

  // add book to the local storage
  Store.addBook(book);

  // empty fields
  UI.empty();
});
// Remove books
document.querySelector('.table-body').addEventListener('click', (e) => {
    // remove book from UI
    UI.deleteBook(e.target);
  
    // Remove book from the local storage
    Store.removeBook(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
  });

//navigating through the application
  nevigateTo();

