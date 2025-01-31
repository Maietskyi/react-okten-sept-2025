import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Recipe } from '../../models';

export const fetchRecipes = createAsyncThunk('recipes/fetchRecipes', async () => {
    const response = await fetch('https://dummyjson.com/recipes');
    return response.json();
});

interface RecipesState {
    recipes: Recipe[];
    loading: boolean;
}

const initialState: RecipesState = {
    recipes: [],
    loading: false,
};

const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {},
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

export default recipesSlice.reducer;