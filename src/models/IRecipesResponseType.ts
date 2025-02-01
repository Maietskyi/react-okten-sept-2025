import {IRecipe} from "./IRecipe.ts";

export interface IRecipesResponseType {
	total: number;
	skip: number;
	limit: number;
	recipes: IRecipe[];
}