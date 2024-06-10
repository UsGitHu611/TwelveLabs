import { configureStore } from "@reduxjs/toolkit";
import { mailApi } from "./api/mailApi.jsx"

export const store = configureStore({
    reducer: {
        [mailApi.reducerPath] : mailApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(mailApi.middleware)
})

