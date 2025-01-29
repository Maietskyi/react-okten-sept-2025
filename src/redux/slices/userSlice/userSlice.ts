import {IUser} from "../../../models/IUser.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

type UserSliceType = {
    users: IUser[];
}

const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI) => {
       try {
           const users = await fetch('https://jsonplaceholder.typicode.com/users')
               .then(value => value.json());
           return thunkAPI.fulfillWithValue(users);
           // throw new Error();
       } catch (error) {
           console.log(error)
           return thunkAPI.rejectWithValue('error');
       }
    }
);

const initialState: UserSliceType = {users: []};
export const userSlice = createSlice({
    name: "userSlice",
    initialState: initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadUsers.fulfilled, (state, action:PayloadAction<IUser[]>) => {
            state.users = action.payload
        })
            .addCase(loadUsers.rejected,(state,action)=>{
                console.log(state)
                console.log(action)
            })
})

export const userSliceActions = {
    ...userSlice.actions, loadUsers
}