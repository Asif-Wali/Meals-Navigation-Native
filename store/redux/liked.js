import { createSlice } from "@reduxjs/toolkit";

const likedSlice = createSlice({
  name: "liked",
  initialState: {
    ids: [],
  },
  reducers: {
    likeMeal: (state, action) => {
      state.ids.push(action.payload.id);
    },
    dislikeMeal: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});
export const likeMeal = likedSlice.actions.likeMeal;
export const dislikeMeal= likedSlice.actions.dislikeMeal;

export default likedSlice.reducer;
