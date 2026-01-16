import { useSelector } from "react-redux";
import type { RootState } from "../../state/store";
import BookCard from "../BookCard";
import "./style.scss";
import { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { selectFilteredBooks } from "@/src/state/books/booksSlice";

/**
 * Renders a virtualized list of books from the books slice with filters applied.
 *
 */

export default function BookList() {
  const books = useSelector((state: RootState) => selectFilteredBooks(state));
  const scrollParentRef = useRef<HTMLDivElement>(null);

  const virtualizer = useVirtualizer({
    count: books.length,
    estimateSize: () => 180,
    getScrollElement: () => scrollParentRef.current,
  });

  const virtualBooks = virtualizer.getVirtualItems();

  return (
    <div className="book-list" ref={scrollParentRef}>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: `${virtualizer.getTotalSize()}px`,
        }}
      >
        <div
          style={{
            position: "absolute",
            transform: `translateY(${virtualBooks[0]?.start ?? 0}px)`,
            left: 0,
            right: 0,
          }}
        >
          {!!books.length &&
            virtualBooks.map((vBook) => (
              <div
                key={vBook.key}
                data-index={vBook.index}
                ref={virtualizer.measureElement}
                style={{
                  margin: "1rem 0",
                }}
              >
                <BookCard
                  book={books[vBook.index]}
                  key={books[vBook.index].id}
                />
              </div>
            ))}
          <span className="result-info">
            {" "}
            {books.length
              ? `Showing ${books.length} book${books.length > 1 ? "s" : ""}`
              : "There is no book matching this title"}
          </span>
        </div>
      </div>
    </div>
  );
}
