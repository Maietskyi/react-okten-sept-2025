import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../../models';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await fetch('https://dummyjson.com/users');
    return response.json();
});

interface UsersState {
    users: User[];
    loading: boolean;
}

const initialState: UsersState = {
    users: [],
    loading: false,
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload.users;
        });
    },
});

export default usersSlice.reducer;