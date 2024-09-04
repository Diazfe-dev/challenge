import { configureStore } from "@reduxjs/toolkit";

import accountReducer from './slices/account.slice';

export const store = configureStore({
    reducer: {
        user: accountReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;