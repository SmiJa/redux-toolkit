import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: ["first comment"],
}

export const commentSlice = createSlice({
  name: "comments",
  initialState: initialState,
  reducers: {
    addComment(state, action) {
      const addedComment = [...state.list, action.payload];
      state.list= addedComment;
    },
  },
});

export const { addComment } = commentSlice.actions

export default commentSlice.reducer;