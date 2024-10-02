const express = require("express");
const fs = require("fs").promises;
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

const booksFilePath = path.join(__dirname, "books.json");

/**
 * Helper function to read books from books.json
 */
const readBooks = async () => {
  try {
    const data = await fs.readFile(booksFilePath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    // If file doesn't exist, return empty array
    if (err.code === "ENOENT") {
      return [];
    } else {
      throw err;
    }
  }
};

/**
 * Helper function to write books to books.json
 * @param {Array} books - Array of book objects
 */
const writeBooks = async (books) => {
  try {
    await fs.writeFile(booksFilePath, JSON.stringify(books, null, 2));
  } catch (err) {
    throw err;
  }
};

// @route   GET /api/books
// @desc    Get all books
// @access  Public
app.get("/api/books", async (req, res) => {
  try {
    const books = await readBooks();
    res.json(books);
  } catch (err) {
    console.error("Error reading books:", err.message);
    res.status(500).json({ message: "Server Error" });
  }
});

// @route   POST /api/books
// @desc    Add a new book
// @access  Public
app.post("/api/books", async (req, res) => {
  const { title, author, pages, published } = req.body;

  // Basic validation
  if (!title || !author || !pages) {
    return res
      .status(400)
      .json({ message: "Title, author, and pages are required." });
  }

  const newBook = {
    id: uuidv4(),
    title,
    author,
    pages,
    published: published
      ? new Date(published).toISOString()
      : new Date().toISOString(),
  };

  try {
    const books = await readBooks();
    books.push(newBook);
    await writeBooks(books);
    res.status(201).json(newBook);
  } catch (err) {
    console.error("Error adding book:", err.message);
    res.status(500).json({ message: "Server Error" });
  }
});

// @route   GET /api/books/:id
// @desc    Get a single book by ID
// @access  Public
app.get("/api/books/:id", async (req, res) => {
  const bookId = req.params.id;

  try {
    const books = await readBooks();
    const book = books.find((b) => b.id === bookId);

    if (!book) {
      return res.status(404).json({ message: "Book not found." });
    }

    res.json(book);
  } catch (err) {
    console.error("Error retrieving book:", err.message);
    res.status(500).json({ message: "Server Error" });
  }
});

// @route   PUT /api/books/:id
// @desc    Update a book by ID
// @access  Public
app.put("/api/books/:id", async (req, res) => {
  const bookId = req.params.id;
  const { title, author, pages, published } = req.body;

  try {
    const books = await readBooks();
    const bookIndex = books.findIndex((b) => b.id === bookId);

    if (bookIndex === -1) {
      return res.status(404).json({ message: "Book not found." });
    }

    // Update fields if they are provided
    if (title) books[bookIndex].title = title;
    if (author) books[bookIndex].author = author;
    if (pages) books[bookIndex].pages = pages;
    if (published)
      books[bookIndex].published = new Date(published).toISOString();

    await writeBooks(books);
    res.json(books[bookIndex]);
  } catch (err) {
    console.error("Error updating book:", err.message);
    res.status(500).json({ message: "Server Error" });
  }
});

// @route   DELETE /api/books/:id
// @desc    Delete a book by ID
// @access  Public
app.delete("/api/books/:id", async (req, res) => {
  const bookId = req.params.id;

  try {
    const books = await readBooks();
    const bookIndex = books.findIndex((b) => b.id === bookId);

    if (bookIndex === -1) {
      return res.status(404).json({ message: "Book not found." });
    }

    const deletedBook = books.splice(bookIndex, 1)[0];
    await writeBooks(books);
    res.json({ message: "Book deleted successfully.", book: deletedBook });
  } catch (err) {
    console.error("Error deleting book:", err.message);
    res.status(500).json({ message: "Server Error" });
  }
});

// Root Route
app.get("/", (req, res) => {
  res.send("Books API is running.");
});

// Start the server
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
