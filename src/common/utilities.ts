import { Recipe } from "./dataTypes/dataTypes";

export function searchRecipes(recipes: Recipe[], searchQuery: string): Recipe[] {
    return recipes.filter(recipe => {
        const searchBasis = (
            recipe.title +
            recipe.instructions +
            recipe.ingredients.map(ingredient => ingredient.title).join(" ")
        ).toLowerCase();

        return searchQuery
            .toLowerCase()
            .split(" ")
            .filter(a => a)
            .every(searchWord => searchBasis.includes(searchWord));
    });
}

export function getRandomId() {
    return Date.now() + "_" + Math.random();
}
