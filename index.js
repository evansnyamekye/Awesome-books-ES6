import Books from './modules/books.js';
import * as pages from './modules/pages.js';
import UI from './modules/ui.js';
import displayDateTime from './modules/date.js';

const form = document.querySelector('.form');
const bookList = document.querySelector('.book-list');

displayDateTime();

UI.displayFromLocalStorage();

// Add books to forms
form.addEventListener('submit', (e) => {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  let id = Math.random() * 2;
  id += title;

  // Declared trim method to remove whitespace & errors
  if (title.trim() === '' || author.trim() === '') {
    UI.getMessage('All form fields are required', 'error');
  } else {
    // Initialize the books bject as blue print to ENTER add books by Users
    const newBook = new Books(id, title, author);

    const ui = new UI();

    // diaply book on userinterface
    ui.displayBooks(newBook);

    // save book to localstorage
    UI.addToLocalStorage(newBook);

    pages.bookListPage();

    UI.getMessage('Books added succesfully', 'success');

    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }

  //   disabled default submission
  e.preventDefault();
});

// remove books
bookList.addEventListener('click', (e) => {
  if (e.target.id === 'remove') {
    const books = UI.getBooks();
    const liParent = e.target.parentElement;

    const filteredBooks = books.filter(
      (book) => book.id !== liParent.id,
    );
    liParent.remove();
    localStorage.setItem('books', JSON.stringify(filteredBooks));

    // Display message
    UI.getMessage('Books removed successfully', 'success');
  }

  // disabled default submission
  e.preventDefault();
});