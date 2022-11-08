// eslint-disable-next-line import/no-mutable-exports
let books = [];

const removeBook = (tag) => {
  if (Object.keys(books).length > 0) {
    books = books.filter(function get(el) {
      return el.id !== parseInt(this[0], 36);
    }, tag);
    localStorage.setItem('books', JSON.stringify(books));
    window.dispatchEvent(new Event('storage'));
  }
};

const loadBooks = () => {
  const el = document.querySelector('.book-list ul');
  el.innerHTML = '';
  if (localStorage.getItem('books')) {
    const data = JSON.parse(localStorage.getItem('books'));
    if (Object.keys(data).length > 0) {
      data.forEach((element) => {
        const span0 = document.createElement('span');
        span0.innerText = element.id;
        const span1 = document.createElement('span');
        span1.textContent = `${element.book} by ${element.author}`;
        const input = document.createElement('input');
        input.type = 'button';
        input.value = 'Remove';
        input.addEventListener('click', (e) => {
          const bookTag = e.target.parentNode.parentNode.querySelector('span:first-child').innerText;
          removeBook(bookTag);
        });
        const span2 = document.createElement('span');
        span2.appendChild(input);
        const li = document.createElement('li');
        li.appendChild(span0);
        li.appendChild(span1);
        li.appendChild(span2);
        el.appendChild(li);
      });
    }
    books = data;
  }
};

export { books, loadBooks };