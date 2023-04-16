import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

const BookCreate = () => {
  const { createBook } = useBooksContext();
  const [title, setTitle] = useState("");

  const onChange = (event) => {
    setTitle(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={onSubmit}>
        <label>Title</label>
        <input
          value={title}
          onChange={onChange}
          type="text"
          required
          placeholder="Enter a book title"
          className="input"
        />
        <button className="button" type="submit">
          Add book
        </button>
      </form>
    </div>
  );
};

export default BookCreate;
