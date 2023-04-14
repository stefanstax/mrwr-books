import { useContext } from "react";
import BookShow from "./BookShow";
import BooksContext from "../context/books";

const BookList = ({ books, onDelete, onEdit }) => {
  const num = useContext(BooksContext);
  const renderedBooks = books.map((book) => {
    return (
      <BookShow book={book} onDelete={onDelete} onEdit={onEdit} key={book.id} />
    );
  });
  return (
    <div className="book-list">
      {num} {renderedBooks}
    </div>
  );
};

export default BookList;
