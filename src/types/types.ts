type Book = {
	id: string;
	name: string;
	author?: string;
	imagePath?: string;
	description?: string;
};

type BookCardProps = {
	book: Book;
};

export { type Book, type BookCardProps };
