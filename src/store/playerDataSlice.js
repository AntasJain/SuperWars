import { createSlice } from "@reduxjs/toolkit";
const initialState = { name: "", score: 0, deckSize: 5 };
const playerDataSlice = createSlice({
  name: "playerData",
  initialState,
  reducers: {
    setPlayerName: (state, action) => {
      state.name = action.payload;
    },
    updateScore: (state, action) => {
      state.score = action.payload;
    },
    resetData: (state) => {
      state.name = "";
      state.score = 0;
    },
    deckSize: (state, action) => {
      state.deckSize = action.payload;
    },
  },
});
export default playerDataSlice.reducer;
export const { setPlayerName, updateScore, resetData, deckSize } =
  playerDataSlice.actions;
