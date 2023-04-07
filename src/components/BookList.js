import BookShow from "./BookShow";

const BookList = ({ books, onDelete }) => {
  const renderedBooks = books.map((book) => {
    return <BookShow book={book} onDelete={onDelete} key={book.id} />;
  });
  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;
