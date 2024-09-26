import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { url } from "../secrets/paths";

export const fetchSuperHeroData = createAsyncThunk(
  "heros/allData",
  async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
);
const initialState = {
  characters: [],
  loading: false,
  error: null,
};
const superHeroDataSlice = createSlice({
  name: "superheros",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSuperHeroData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSuperHeroData.fulfilled, (state, action) => {
        state.loading = false;
        state.characters = action.payload;
      })
      .addCase(fetchSuperHeroData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default superHeroDataSlice.reducer;
