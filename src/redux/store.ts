import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./slices/userSlice/userSlice.ts";

export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        // postSlice: postSlice.reducer,
    }
});