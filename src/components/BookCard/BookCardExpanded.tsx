import type { Book } from "@/src/types/types";
import type { ElementType, ReactNode } from "react";

type BookCardExpandedProps = {
  book: Book;
  closeButton?: ReactNode;
  TitleComponent?: ElementType;
  DescriptionComponent?: ElementType;
};

/**
 *
 * Renders a component displaying full book info. Main usage: Modal content within Radix Dialog component.
 * @param TitleComponent - Book title component (defaults to h2).
 * @param DescriptionComponent - Book description component (defaults to p).
 * @param closeButton - Slot for a close action.
 *
 * @example
 * <BookCardExpanded
 *  book={book}
 *  TitleComponent={Dialog.Title}
 *  DescriptionComponent={Dialog.Description}
 *  closeButton={<Dialog.Close>X</Dialog.Close>}
 * />
 */

export default function BookCardExpanded({
  book,
  closeButton,
  TitleComponent = "h2",
  DescriptionComponent = "p",
}: BookCardExpandedProps) {
  return (
    <div className="book-card-content">
      <img
        src={
          book.imagePath
            ? book.imagePath
            : "./cover-images/placeholder-book.png"
        }
        onError={(e) =>
          (e.currentTarget.src = "./cover-images/placeholder-book.png")
        }
        alt={`${book.name} cover`}
      />
      <TitleComponent>{book.name}</TitleComponent>
      <span className="author-name">
        by {book.author ? book.author : "unknown author"}
      </span>
      <DescriptionComponent>
        {book.description ? book.description : "Description not provided."}
      </DescriptionComponent>
      {closeButton}
    </div>
  );
}
