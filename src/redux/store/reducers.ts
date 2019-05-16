import { Action, AddRecipesAction, IncrementIngredientCounterAction } from "./actions";
import {
    FETCH_RECIPES_FINISH,
    FETCH_RECIPES_START,
    INCREMENT_INGREDIENT_COUNT
} from "./actions";
import { ReduxState } from "./reduxState";
import { Recipe, Ingredient } from "../../common/dataTypes/dataTypes";

const defaultState: ReduxState = {
    recipesById: {},
    recipeIds: [],
    isLoading: false
};

export function rootReducer(state: ReduxState = defaultState, action: Action) {
    switch (action.type) {
        case FETCH_RECIPES_START:
            return { ...state, isLoading: true };
        case FETCH_RECIPES_FINISH:
            return addRecipesReducer(state, action as AddRecipesAction);
        case INCREMENT_INGREDIENT_COUNT:
            return incrementIngredientCounterReducer(
                state,
                action as IncrementIngredientCounterAction
            );
    }
    return state;
}

function addRecipesReducer(state: ReduxState, action: AddRecipesAction): ReduxState {
    let newRecipesById: { [key: string]: Recipe } = {};
    let newRecipeIds: string[] = [];
    for (let recipe of action.recipes) {
        newRecipesById[recipe.id] = recipe;
        newRecipeIds.push(recipe.id);
    }
    return {
        ...state,
        isLoading: false,
        recipesById: newRecipesById,
        recipeIds: newRecipeIds
    };
}

function incrementIngredientCounterReducer(
    state: ReduxState,
    { recipeId, ingredientIndex }: IncrementIngredientCounterAction
): ReduxState {
    const { recipesById } = state;
    const recipe = recipesById[recipeId];
    const ingredient = recipe.ingredients[ingredientIndex];

    const replacedIngredients: Ingredient[] = [
        ...recipe.ingredients.slice(0, ingredientIndex),
        {
            ...ingredient,
            count: ingredient.count + 1
        },
        ...recipe.ingredients.slice(ingredientIndex + 1)
    ];

    return {
        ...state,
        recipesById: {
            ...state.recipesById,
            [recipeId]: {
                ...recipe,
                ingredients: replacedIngredients
            }
        }
    };
}
