import { useState } from "react";
import { useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...books, ...response.data };
      }
      return book;
    });

    setBooks(updatedBooks);
  };

  const deleteBookByID = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const deletedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(deletedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookByID} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
