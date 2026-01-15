import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import mockBooks from "@/mock-data/books.json";
import { type Book } from "@/src/types/types";

const booksSlice = createSlice({
  name: "books",
  initialState: mockBooks as Book[],
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      state.push(action.payload);
    },
  },
});

export default booksSlice.reducer;
