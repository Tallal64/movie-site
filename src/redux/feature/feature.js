import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
});

export const { setMovieId, setSeriesId } = movieSlice.actions;

export default movieSlice.reducer;
