import { createSlice } from "@reduxjs/toolkit";
const initialState = { name: "", score: 0 };
const playerDataSlice = createSlice({
  name: "playerData",
  initialState,
  reducers: {
    setPlayerName: (state, action) => {
      state.name = action.payload;
    },
    updateScore: (state) => {
      state.score++;
    },
  },
});
export default playerDataSlice.reducer;
export const { setPlayerName, updateScore } = playerDataSlice.actions;
