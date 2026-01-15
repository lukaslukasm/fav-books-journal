import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Book } from "@/src/types/types";
import getFakeBooks from "@/src/utils/getFakeBooks";

const booksSlice = createSlice({
  name: "books",
  initialState: getFakeBooks(1000),
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      state.push(action.payload);
    },
  },
});

export default booksSlice.reducer;
