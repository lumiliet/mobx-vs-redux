import { Recipe } from "../../common/dataTypes/dataTypes";
import { fetchRandomRecipes } from "../../common/api/mealDBApi";

export const FETCH_RECIPES_START = "FETCH_RECIPES_START";
export const FETCH_RECIPES_FINISH = "FETCH_RECIPES_FINISH";
export const INCREMENT_INGREDIENT_COUNT = "INCREMENT_INGREDIENT_COUNT";

export type Action = BasicAction | AddRecipesAction | IncrementIngredientCounterAction;

export interface BasicAction {
    type: string;
}

export interface AddRecipesAction {
    type: string;
    recipes: Recipe[];
}

export function addRandomRecipes() {
    return async (dispatch: (a: Action) => void) => {
        dispatch({
            type: FETCH_RECIPES_START
        });

        const recipes = await fetchRandomRecipes();

        dispatch({
            type: FETCH_RECIPES_FINISH,
            recipes
        });
    };
}

export interface IncrementIngredientCounterAction {
    type: string;
    recipeId: string;
    ingredientIndex: number;
}

export function incrementIngredientCounter(
    recipeId: string,
    ingredientIndex: number
): IncrementIngredientCounterAction {
    return {
        type: INCREMENT_INGREDIENT_COUNT,
        recipeId,
        ingredientIndex
    };
}
