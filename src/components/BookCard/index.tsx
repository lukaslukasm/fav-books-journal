import type { BookCardProps } from "@/src/types/types";
import "./style.scss";
import { Dialog } from "radix-ui";
import { CircleX } from "lucide-react";
import BookCardFace from "./BookCardFace";
import BookCardExpanded from "./BookCardExpanded";

/**
 * Renders a card showing a brief book info. On click opens modal with a full info.
 *
 */

export default function BookCard({ book }: BookCardProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <BookCardFace book={book} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="dialog-content">
          <BookCardExpanded
            book={book}
            closeButton={
              <Dialog.Close className="dialog-close">
                <CircleX style={{ opacity: 0.5 }} />
              </Dialog.Close>
            }
            TitleComponent={Dialog.Title}
            DescriptionComponent={Dialog.Description}
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
