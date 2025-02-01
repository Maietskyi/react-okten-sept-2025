import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getAll} from "../../servises/api.service.ts";
import {IRecipe} from "../../models/IRecipe.ts";

type RecipeSliceType = {
    recipes: IRecipe[]
}
const initRecipeSliceState: RecipeSliceType = {recipes: []}

const loadRecipes = createAsyncThunk('loadRecipes', async (_, thunkAPI) => {
    const recipes = await getAll<IRecipe[]>('/recipes').then();
    console.log(recipes);
    return thunkAPI.fulfillWithValue(recipes)
});
export const recipeSlice = createSlice({
    name: 'recipeSlice',
    initialState: initRecipeSliceState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadRecipes.fulfilled, (state, action: PayloadAction<IRecipe[]>) => {
            state.recipes = action.payload
        }),
});

export const recipeActions = {...recipeSlice.actions, loadRecipes};
