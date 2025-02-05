import { configureStore } from "@reduxjs/toolkit";
import graphReducer from "./graphSlice";
import nodeStylingReducer from "./nodeStylingSlice"

export const store = configureStore({
  reducer: {
    graph: graphReducer,
    nodeStyling: nodeStylingReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;