// Fetch books
fetch("http://localhost:3000/books")
  .then((response) => response.json())
  .then((books) => {
    books.forEach(renderBooks);
  });

// Render books
function renderBooks(book) {
  const ulElement = document.querySelector("ul#list");
  const li = document.createElement("li");
  li.textContent = book.title;
  // Add event listener to li element to show book details
  li.addEventListener("click", () => {
    renderBookDetails(book);
  });
  ulElement.appendChild(li);
}

// Render book details
function renderBookDetails(book) {
  const showPanel = document.querySelector("div#show-panel");
  showPanel.innerHTML = ""; // Clear previous details

  const img = document.createElement("img");
  img.src = book.img_url;
  img.alt = book.title;
  showPanel.appendChild(img);

  const title = document.createElement("h1");
  title.textContent = book.title;
  showPanel.appendChild(title);

  const subtitle = document.createElement("h2");
  subtitle.textContent = book.subtitle;
  showPanel.appendChild(subtitle);

  const author = document.createElement("h2");
  author.textContent = book.author;
  showPanel.appendChild(author);

  const description = document.createElement("h3");
  description.textContent = book.description;
  showPanel.appendChild(description);
}
