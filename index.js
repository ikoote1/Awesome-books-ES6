import Book from './modules/book.js'
import { UI } from './modules/UI.js';
import { Store } from './modules/store.js';
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

// complete website with navigation
const logo = document.querySelector('.logo');
const bookList = document.querySelector('.list-link');
const addLink = document.querySelector('.add-link');
const contact = document.querySelector('.contact-link');
const bookDisplayed = document.querySelector('.book-displayed-section');
const addSection = document.querySelector('.add-book-section');
const contactSec = document.querySelector('.contact-section');

//event listners
logo.addEventListener('click',() =>{
    bookDisplayed.classList.remove('active');
    addSection.classList.remove('active');
    contactSec.classList.remove('active');
});


bookList.addEventListener('click', () => {
  bookDisplayed.classList.remove('active');
  addSection.classList.remove('active');
  contactSec.classList.remove('active');
});



addLink.addEventListener('click', () => {
  bookDisplayed.classList.add('active');
  addSection.classList.add('active');
  contactSec.classList.remove('active');
});

contact.addEventListener('click', () => {
  bookDisplayed.classList.add('active');
  addSection.classList.remove('active');
  contactSec.classList.add('active');
});