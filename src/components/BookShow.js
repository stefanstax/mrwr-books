const BookShow = ({ book, onDelete }) => {
  const onClick = () => {
    onDelete(book.id);
  };
  return (
    <div className="book-show">
      {book.title}
      <div className="actions">
        <button className="delete" onClick={onClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
