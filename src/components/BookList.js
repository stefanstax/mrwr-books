import BookShow from "./BookShow";

const BookList = ({ books, onDelete, onEdit }) => {
  const renderedBooks = books.map((book) => {
    return (
      <BookShow book={book} onDelete={onDelete} onEdit={onEdit} key={book.id} />
    );
  });
  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;
