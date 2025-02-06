import { configureStore } from "@reduxjs/toolkit";
import graphReducer from "./graphSlice";
import nodeStylingReducer from "./nodeStylingSlice";
import historyReducer from "./historyDataSlice"

export const store = configureStore({
  reducer: {
    graph: graphReducer,
    nodeStyling: nodeStylingReducer,
    history: historyReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;