import { Recipe } from "./dataTypes/dataTypes";

export function searchRecipes(recipes: Recipe[], recipeSearchValue: string): Recipe[] {
    return recipes.filter(recipe => {
        const searchBasis =
            recipe.title +
            recipe.instructions +
            recipe.ingredients.map(ingredient => ingredient.title).join(" ");

        return searchBasis.toLowerCase().includes(recipeSearchValue.toLowerCase());
    });
}


export function getRandomId() {
    return Date.now() + "_" + Math.random();
}
