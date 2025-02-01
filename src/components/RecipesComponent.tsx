import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {recipeActions} from "../redux/slices/RecipeSlice.ts";
import {IRecipe} from "../models/IRecipe.ts";

export const RecipesComponent = () => {

    const dispatch = useAppDispatch();
    const recipes = useAppSelector((state) => state.recipeStoreSlice.recipes);
    useEffect(() => {
        dispatch(recipeActions.loadRecipes())
    }, [])

    return (
        <>
            {recipes.map((recipe:IRecipe) => (<div key={recipe.id}>{recipe.id}--{recipe.name}</div>))}
        </>
    );
};