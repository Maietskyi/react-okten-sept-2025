import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./slices/UserSlice.ts";
import {postSlice} from "./slices/PostSlice.ts";
import {commentSlice} from "./slices/CommentSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import {recipeSlice} from "./slices/RecipeSlice.ts";


export const store = configureStore({
    reducer: {
        userStoreSlice: userSlice.reducer,
        postStoreSlice: postSlice.reducer,
        commentStoreSlice: commentSlice.reducer,
        recipeStoreSlice: recipeSlice.reducer
    }
});

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();