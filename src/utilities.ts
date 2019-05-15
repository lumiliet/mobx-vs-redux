import { Recipe } from "./dataTypes/dataTypes";

export function searchRecipes(recipes: Recipe[], recipeSearchValue: string): Recipe[] {
    return recipes.filter(recipe => {
        const searchBasis = (
            recipe.title +
            recipe.instructions +
            recipe.ingredients.map(ingredient => ingredient.title).join(" ")
        ).toLowerCase();

        return recipeSearchValue
            .toLowerCase()
            .split(" ")
            .filter(a => a)
            .every(searchTerm => searchBasis.includes(searchTerm));
    });
}

export function getRandomId() {
    return Date.now() + "_" + Math.random();
}
