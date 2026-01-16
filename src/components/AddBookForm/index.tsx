import { addBook } from "@/src/state/books/booksSlice";
import BookForm from "../BookForm";
import { useDispatch } from "react-redux";
import "./style.scss";

export default function AddBook() {
  const dispatch = useDispatch();

  return (
    <div className="add-book-form">
      <h2>Add a Book</h2>
      <BookForm onSubmit={(data) => dispatch(addBook(data))} />
    </div>
  );
}
