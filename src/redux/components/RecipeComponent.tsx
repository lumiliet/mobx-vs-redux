import React from "react";
import { Ingredient, Recipe } from "../../dataTypes/dataTypes";

interface RecipeProps {
    recipe: Recipe;
    onIngredientClick: (ingredientIndex: number) => void;
}

function RecipeComponent({ recipe, onIngredientClick }: RecipeProps) {
    const ingredientElements = recipe.ingredients.map((ingredient, index) => (
        <IngredientComponent
            key={ingredient.id}
            ingredient={ingredient}
            onClick={() => onIngredientClick(index)}
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

export default RecipeComponent;

interface IngredientProps {
    ingredient: Ingredient;
    onClick: () => void;
}

function IngredientComponent({ ingredient, onClick }: IngredientProps) {
    return (
        <li className="recipe__ingredient" onClick={onClick}>
            {ingredient.count} {ingredient.title}
        </li>
    );
}
