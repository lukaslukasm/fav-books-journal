import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Book } from "@/src/types/types";
import getFakeBooks from "@/src/utils/getFakeBooks";
import type { RootState } from "../store";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    items: getFakeBooks(1000),
    titleFilterQuery: "",
  },
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      state.items.unshift(action.payload);
    },
    setTitleFilterQuery: (state, action: PayloadAction<string>) => {
      state.titleFilterQuery = action.payload;
    },
  },
});

export const { addBook, setTitleFilterQuery } = booksSlice.actions;
export default booksSlice.reducer;

export const selectFilteredBooks = (state: RootState) => {
  if (!state.books.titleFilterQuery) return state.books.items;

  return state.books.items.filter((book) =>
    book.name
      .toLowerCase()
      .includes(state.books.titleFilterQuery.toLowerCase()),
  );
};
