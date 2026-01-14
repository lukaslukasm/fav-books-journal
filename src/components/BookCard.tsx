import type { Book } from '@/src/types/types';

type BookCardProps = {
	book: Book;
};

/**
 * Renders a card showing a brief book info. On click opens modal with a full info.
 *
 */

export default function BookCard({ book }: BookCardProps) {
	return <div className='book-card'></div>;
}
