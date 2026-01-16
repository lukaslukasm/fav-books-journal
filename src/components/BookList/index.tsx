import Filters from "../Filters";
import BookContainer from "./BookContainer";
import "./style.scss";

export default function BookList() {
  return (
    <div className="book-list">
      <div className="books-list-header">
        <h2>Books</h2>
        <Filters />
      </div>
      <BookContainer />
    </div>
  );
}
