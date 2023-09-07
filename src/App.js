import { useState } from "react";
import getRandomNumber from "./utils/getRandomNumber";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const id = getRandomNumber();

  const createBook = (title) => {
    const updatedBooks = [...books, { id: id, title }];

    setBooks(updatedBooks);
  };

  const deleteBookByID = (id) => {
    const deletedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(deletedBooks);
  };

  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBookByID} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
