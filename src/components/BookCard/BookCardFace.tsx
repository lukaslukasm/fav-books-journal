import type { BookCardProps } from "@/src/types/types";

/**
 * Renders a card face showing a brief book info in horizontal layout.
 *
 */

export default function BookCardFace({ book }: BookCardProps) {
  return (
    <div className="book-card-face">
      <div className="img-wrap">
        <img
          onError={(e) =>
            (e.currentTarget.src = "./cover-images/placeholder-book.png")
          }
          src={
            book.imagePath
              ? book.imagePath
              : "./cover-images/placeholder-book.png"
          }
          alt={`${book.name} cover`}
        />
      </div>
      <div className="content">
        <h3>{book.name}</h3>
        <p>
          {book.description ? book.description : "Description not provided."}
        </p>
        <div className="sub-section">
          <span className="author-name">
            {book.author ? book.author : "Unknown author"}
          </span>
          <span className="underline-button">Read More</span>
        </div>
      </div>
    </div>
  );
}
