import { useSelector } from "react-redux";
import type { RootState } from "../../state/store";
import BookCard from "../BookCard";
import "./style.scss";
import { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";

export default function BookList() {
  const books = useSelector((state: RootState) => state.books);
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
        {virtualBooks.map((vBook) => (
          <div
            key={vBook.index}
            style={{
              position: "absolute",
              padding: "1rem",
              transform: `translateY(${vBook.start}px)`,
              left: 0,
              right: 0,
            }}
          >
            <BookCard book={books[vBook.index]} key={books[vBook.index].id} />
          </div>
        ))}
      </div>
    </div>
  );
}
