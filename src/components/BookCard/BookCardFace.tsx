import type { BookCardProps } from '@/src/types/types';

/**
 * Renders a card face showing a brief book info in horizontal layout.
 *
 */

export default function BookCardFace({ book }: BookCardProps) {
	return (
		<div className='book-card-face'>
			<div className='img-wrap'>
				<img
					src={book.imagePath}
					alt={book.name + ' cover'}
				/>
			</div>
			<div className='content'>
				<h3>{book.name}</h3>
				<p>{book.description}</p>
				<div className='sub-section'>
					<span className='author-name'>{book.author}</span>
					<span className='fake-button'>Read More</span>
				</div>
			</div>
		</div>
	);
}
