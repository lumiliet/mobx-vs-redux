import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { Recipe } from "../../common/dataTypes/dataTypes";
import IngredientItem from "./IngredientItem";

interface RecipeProps {
    recipe: Recipe;
}

const RecipeItem: FC<RecipeProps> = observer(function RecipeComponent({ recipe }) {
    const ingredientElements = recipe.ingredients.map(ingredient => (
        <IngredientItem key={ingredient.id} ingredient={ingredient} />
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

export default RecipeItem;
