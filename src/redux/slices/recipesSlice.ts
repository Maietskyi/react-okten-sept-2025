import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Recipe } from '../../models';

export const fetchRecipes = createAsyncThunk('recipes/fetchRecipes', async () => {
    const response = await fetch('https://dummyjson.com/recipes');
    return response.json();
});

interface RecipesState {
    recipes: Recipe[];
    loading: boolean;
    searchQuery: string;
    selectedTag: string | null;
}

const initialState: RecipesState = {
    recipes: [],
    loading: false,
    searchQuery: '',
    selectedTag: null,
};

const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
        setSelectedTag: (state, action) => {
            state.selectedTag = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRecipes.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchRecipes.fulfilled, (state, action) => {
            state.loading = false;
            state.recipes = action.payload.recipes;
        });
    },
});

export const { setSearchQuery, setSelectedTag } = recipesSlice.actions;
export default recipesSlice.reducer;