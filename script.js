const bookList = document.getElementById('bookList');
const bookTitle = document.getElementById('bookTitle');

function addBook() {
    const title = bookTitle.value;
    if (title) {
        const li = document.createElement('li');
        li.innerHTML = `
            ${title}
            <button onclick="editBook(this)">Edit</button>
            <button onclick="deleteBook(this)">Delete</button>
        `;
        bookList.appendChild(li);
        bookTitle.value = '';
    }
}

function editBook(button) {
    const li = button.parentElement;
    const title = li.firstChild.textContent;
    const updatedTitle = prompt('Edit book title:', title);
    if (updatedTitle) {
        li.firstChild.textContent = updatedTitle;
    }
}

function deleteBook(button) {
    const li = button.parentElement;
    li.remove();
}
