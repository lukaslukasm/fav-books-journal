import { useState, useTransition } from "react";
import { setTitleFilterQuery } from "@/src/state/books/booksSlice";
import { useDispatch } from "react-redux";

/**
 * Renders a filter by book title input field with a label.
 * Sets `titleFilterQuery` in books slice.
 *
 */
export default function FilterByTitle() {
  const [query, setQuery] = useState("");

  const [, startTransition] = useTransition();
  const dispatch = useDispatch();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setQuery(value);
    startTransition(() => {
      dispatch(setTitleFilterQuery(value));
    });
  };

  return (
    <div className="text-input-wrapper">
      <label htmlFor="FilterByTitle">Filter by title:</label>
      <input
        type="text"
        placeholder="Title"
        id="FilterByTitle"
        autoComplete="off"
        name="Filter By Title"
        value={query}
        onChange={handleSearchChange}
      />
    </div>
  );
}
