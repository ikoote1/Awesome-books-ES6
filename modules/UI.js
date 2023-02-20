export class UI {
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
  