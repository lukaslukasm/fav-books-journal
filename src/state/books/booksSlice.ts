import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import mockBooks from '../../../mock-data/books.json';

type Book = {
	name: string;
	author?: string;
	imagePath?: string;
	description?: string;
};

const booksSlice = createSlice({
	name: 'books',
	initialState: mockBooks as Book[],
	reducers: {
		addBook: (state, action: PayloadAction<Book>) => {
			state.push(action.payload);
		},
	},
});

export default booksSlice.reducer;
