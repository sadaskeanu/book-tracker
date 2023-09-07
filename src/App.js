import { useState } from "react";
import getRandomNumber from "./utils/getRandomNumber";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);

  const id = getRandomNumber();

  const handleCreateBook = (title) => {
    const updatedBooks = [...books, { id: id, title }];

    setBooks(updatedBooks);
  };

  console.log(books);

  return (
    <div>
      <BookCreate onCreate={handleCreateBook} />
    </div>
  );
}

export default App;
