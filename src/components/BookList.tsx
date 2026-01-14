import { useSelector } from 'react-redux';
import type { RootState } from '../state/store';

export default function BookList() {
	const books = useSelector((state: RootState) => state.books);

	return (
		<div>
			{books.map((book) => (
				<div key={book.name}>
					{book.name}
					<img
						src={book.imagePath}
						width={200}
						alt={book.name + ' cover'}
					/>
				</div>
			))}
		</div>
	);
}
