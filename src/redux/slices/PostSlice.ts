import {IPost} from "../../models/IPost.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getAll} from "../../servises/api.service.ts";

type PostSliceType = {
    posts: IPost[]
}
const initPostSliceState: PostSliceType = {posts: []}

const loadPosts = createAsyncThunk('loadPosts', async (_, thunkAPI) => {
    const posts = await getAll<IPost[]>("/posts").then();
    console.log(posts);
    return thunkAPI.fulfillWithValue(posts)
});
export const postSlice = createSlice({
    name: 'userSlice',
    initialState: initPostSliceState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
            state.posts = action.payload
        }),
});

export const postActions = {...postSlice.actions, loadPosts};
