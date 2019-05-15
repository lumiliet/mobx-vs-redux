import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { Ingredient, Recipe } from "../../dataTypes/dataTypes";

interface RecipeProps {
    recipe: Recipe;
}

const RecipeComponent: FC<RecipeProps> = observer(function RecipeComponent({ recipe }) {
    const ingredientElements = recipe.ingredients.map(ingredient => (
        <IngredientComponent key={ingredient.id} ingredient={ingredient} />
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
});

export default RecipeComponent;

interface IngredientProps {
    ingredient: Ingredient;
}

const IngredientComponent: FC<IngredientProps> = observer(function IngredientComponent({
    ingredient
}) {
    return (
        <li className="recipe__ingredient" onClick={() => ingredient.count++}>
            {ingredient.count} {ingredient.title}
        </li>
    );
});
