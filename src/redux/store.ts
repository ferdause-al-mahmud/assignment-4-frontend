// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice"; // Import reducers

export const store = configureStore({
    reducer: {
        counter: counterReducer, // Add reducers here
    },
});

// Define RootState and AppDispatch types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
