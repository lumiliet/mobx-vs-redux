import { Recipe } from "../dataTypes/dataTypes";
import { getRandomId } from "../utilities";

export async function fetchRandomRecipe(): Promise<Recipe> {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const { meals } = await response.json();
    const recipe: { [key: string]: string } = meals[0];

    const ingredients = Object.entries(recipe)
        .filter(([key, _]) => key.includes("Ingredient"))
        .map(([_, title]) => ({
            title,
            count: 1,
            id: getRandomId()
        }))
        .filter(ingredient => ingredient.title);

    return {
        id: getRandomId(),
        title: recipe.strMeal,
        instructions: recipe.strInstructions,
        image: recipe.strMealThumb,
        ingredients
    };
}

export async function fetchRandomRecipes() {
    return Promise.all([
        fetchRandomRecipe(),
        fetchRandomRecipe(),
        fetchRandomRecipe(),
        fetchRandomRecipe(),
        fetchRandomRecipe()
    ]);
}
