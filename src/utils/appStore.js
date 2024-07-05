import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "../utils/userSlice";
import moviesReducer from "../utils/moviesSlice"
import gptSearchReducer from "./gptSearchSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
  reducer: {
   
    user:userReducer ,
    movies:moviesReducer,
    gptSearch:gptSearchReducer,
    config:configReducer,

  },
});

export default appStore;
