import { configureStore } from "@reduxjs/toolkit";
import superHeroReducer from "./superHeroDataSlice";
import playerDataSlice from "./playerDataSlice";

const store = configureStore({
  reducer: {
    heroSlice: superHeroReducer,
    playerSlice: playerDataSlice,
  },
});

export default store;
