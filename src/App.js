import { useState } from "react";
import getRandomNumber from "./utils/getRandomNumber";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const id = getRandomNumber();

  const handleCreateBook = (title) => {
    const updatedBooks = [...books, { id: id, title }];

    setBooks(updatedBooks);
  };

  console.log(books);

  return (
    <div className="app">
      <BookList books={books} />
      <BookCreate onCreate={handleCreateBook} />
    </div>
  );
}

export default App;
