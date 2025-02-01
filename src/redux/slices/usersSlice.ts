
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '../../models';

export const fetchUsers = createAsyncThunk('users/fetch', async (query: string) => {
    const url = query ? `https://dummyjson.com/users/search?q=${query}` : 'https://dummyjson.com/users';
    const response = await axios.get(url);
    return response.data.users;
});

interface UsersState {
    users: User[];
    loading: boolean;
    searchQuery: string;
}

const initialState: UsersState = {
    items: [],
    loading: false,
    error: null,
    total: 0,
    page: 1,
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
    },
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

export const { setSearchQuery } = usersSlice.actions;
export default usersSlice.reducer;