import type { Book } from '@/src/types/types';
import type { ElementType, ReactNode } from 'react';

type BookCardExpandedProps = {
	book: Book;
	closeButton?: ReactNode;
	TitleComponent?: ElementType;
	DescriptionComponent?: ElementType;
};

export default function BookCardExpanded({
	book,
	closeButton,
	TitleComponent = 'h2',
	DescriptionComponent = 'p',
}: BookCardExpandedProps) {
	return (
		<div className='book-card-content'>
			<img
				src={book.imagePath}
				alt={book.name + ' cover'}
			/>
			<TitleComponent>{book.name}</TitleComponent>
			<span className='author-name'>by {book.author}</span>
			<DescriptionComponent>{book.description}</DescriptionComponent>
			{closeButton}
		</div>
	);
}
