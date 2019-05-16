import React from "react";
import { useMemo } from "react";
import { searchRecipes } from "../../common/utilities";
import { Recipe } from "../../common/dataTypes/dataTypes";
import RecipeItem from "./RecipeItem";

interface RecipeListProps {
    recipes: Recipe[];
    searchQuery: string;
}

export default function RecipeList({ recipes, searchQuery }: RecipeListProps) {
    const matchingRecipes = useMemo(() => {
        return searchRecipes(recipes, searchQuery);
    }, [recipes, searchQuery]);

    const recipeElements = matchingRecipes.map(recipe => (
        <RecipeItem key={recipe.id} recipe={recipe} />
    ));
    return <ul className="recipes__list">{recipeElements}</ul>;
}
