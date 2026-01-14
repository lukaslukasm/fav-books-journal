import { useSelector } from 'react-redux';
import type { RootState } from '../../state/store';
import BookCard from '../BookCard';
import './style.scss';

export default function BookList() {
	const books = useSelector((state: RootState) => state.books);

	return (
		<div className='book-list'>
			{books.map((book) => (
				<BookCard
					book={book}
					key={book.id}
				/>
			))}
		</div>
	);
}
