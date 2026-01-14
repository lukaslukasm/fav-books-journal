import type { Book } from '@/src/types/types';
import './style.scss';

type BookCardProps = {
	book: Book;
};

/**
 * Renders a card showing a brief book info. On click opens modal with a full info.
 *
 */

export default function BookCard({ book }: BookCardProps) {
	return (
		<button
			onClick={() => console.log('wee')}
			className='book-card'
		>
			<div className='img-wrap'>
				<img
					src={book.imagePath}
					alt={book.name + ' cover'}
				/>
			</div>
			<div className='card-content'>
				<h3>{book.name}</h3>
				<p>{book.description}</p>
				<div className='sub-section'>
					<span className='author-name'>{book.author}</span>
					<span className='btn secondary'>More</span>
				</div>
			</div>
		</button>
	);
}
