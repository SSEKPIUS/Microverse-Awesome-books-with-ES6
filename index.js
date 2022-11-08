import { DateTime } from './modules/luxon.min.js';
import toggleView from './modules/view_toggle.js';
import { addBook, loadBooks } from './modules/dom_methods.js';

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('date').innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);
  document.getElementById('list-link').addEventListener('click', (e) => {
    e.target.style.color = 'blue';
    document.querySelector('#new-link span').style.color = 'inherit';
    document.querySelector('#contact-link span').style.color = 'inherit';
    toggleView(0);
  });
  document.getElementById('new-link').addEventListener('click', (e) => {
    e.target.style.color = 'blue';
    document.querySelector('#list-link span').style.color = 'inherit';
    document.querySelector('#contact-link span').style.color = 'inherit';
    toggleView(1);
  });
  document.getElementById('contact-link').addEventListener('click', (e) => {
    e.target.style.color = 'blue';
    document.querySelector('#list-link span').style.setProperty('color', 'inherit');
    document.querySelector('#new-link span').style.setProperty('color', 'inherit');
    toggleView(2);
  });
  document.getElementById('book-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const book = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    if (book && author) {
      addBook(book, author);
      document.getElementById('title').value = '';
      document.getElementById('author').value = '';
    } else {
      document.getElementById('error').textContent = 'Provide all details';
      document.getElementById('error').style.setProperty('color', 'red');
    }
  });
  window.addEventListener('storage', () => {
    loadBooks();
  });
  loadBooks();

  const addbk = document.querySelector('#add-bk');
  const bkList = document.getElementById('list-link');
  const newLink = document.querySelector('#new-link span');
  const contactLink = document.querySelector('#contact-link span');

  addbk.addEventListener('click', () => {
    if (document.getElementById('title').value !== '' && document.getElementById('author').value !== '') {
      toggleView(0);
      bkList.style.color = 'inherit';
      newLink.style.color = 'inherit';
      contactLink.style.color = 'inherit';
    }
  });
});
