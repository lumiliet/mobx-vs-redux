import React, { memo } from "react";
import { Recipe } from "../../common/dataTypes/dataTypes";
import IngredientItem from "./IngredientItem";

interface RecipeProps {
    recipe: Recipe;
}

function RecipeItem({ recipe }: RecipeProps) {
    const ingredientElements = recipe.ingredients.map((ingredient, index) => (
        <IngredientItem
            key={ingredient.id}
            ingredient={ingredient}
            recipeId={recipe.id}
            ingredientIndex={index}
        />
    ));
    return (
        <li className="recipe">
            <div className="recipe__left">
                <img src={recipe.image} alt="" className="recipe__image" />
            </div>
            <div className="recipe__right">
                <h2 className="recipe__title">{recipe.title}</h2>
                <p className="recipe__description">{recipe.instructions.slice(0, 300)}</p>
                <p>Ingredients:</p>
                <ul className="recipe__ingredients">{ingredientElements}</ul>
            </div>
        </li>
    );
}

export default memo(RecipeItem);
