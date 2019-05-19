import { observer } from "mobx-react-lite";
import React from "react";
import RecipeItem from "./RecipeItem";
import { ApplicationStateProps } from "./RecipesContainer";

function RecipeList({ state }: ApplicationStateProps) {
    const recipeElements = state.matchingRecipes.map(recipe => (
        <RecipeItem key={recipe.id} recipe={recipe} />
    ));
    return <ul className="recipes__list">{recipeElements}</ul>;
}

export default observer(RecipeList);
