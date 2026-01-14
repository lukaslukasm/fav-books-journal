import type { Book } from '@/src/types/types';

type BookCardProps = {
	book: Book;
};

/**
 * Renders a card showing shorten book info. Opens modal on click with a full info.
 *
 */

export default function BookCard({ book }: BookCardProps) {
	return <div className='book-card'></div>;
}
