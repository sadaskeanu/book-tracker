import { useState, useContext } from "react";
import BooksContext from "../context/books";
import BookEdit from "./BookEdit";

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);

  const { deleteBookById } = useContext(BooksContext);

  const url = `https://picsum.photos/seed/${book.id}/300/200`;

  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleOnSubmit = () => {
    setShowEdit(false);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit onSubmit={handleOnSubmit} book={book} />;
  }

  return (
    <div className="book-show">
      <img alt="books" src={url} />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
