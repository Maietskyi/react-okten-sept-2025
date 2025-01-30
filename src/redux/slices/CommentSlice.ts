import {IComment} from "../../models/IComment.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getAll} from "../../servises/api.service.ts";
import {postSlice} from "./PostSlice.ts";

type CommentSliceType = {
    comments: IComment[]
}
const initCommentSliceState: CommentSliceType = {comments: []}

const loadComments = createAsyncThunk('loadComments', async (_, thunkAPI) => {
    const comments = await getAll<IComment[]>("/comments").then();
    console.log(comments);
    return thunkAPI.fulfillWithValue(comments)
});

export const commentSlice = createSlice({
    name: 'userSlice',
    initialState: initCommentSliceState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadComments.fulfilled, (state, action: PayloadAction<IComment[]>) => {
            state.comments = action.payload
        }),
});

export const commentActions = {...postSlice.actions, loadComments};