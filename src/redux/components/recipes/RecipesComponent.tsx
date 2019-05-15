import React, { useEffect, useState, useMemo } from "react";
import { Recipe } from "../../../dataTypes/dataTypes";
import { RecipesProps } from "./Recipes";
import RecipeComponent from "../RecipeComponent";
import { searchRecipes } from "../../../utilities";

export function RecipesComponent({
    addRandomRecipes,
    recipes,
    isLoading,
    incrementIngredientCounter
}: RecipesProps) {
    const [recipeSearchValue, setRecipeSearchValue] = useState("");

    useEffect(() => {
        addRandomRecipes();
    }, []);

    const matchingRecipes = useMemo(() => {
        return searchRecipes(recipes, recipeSearchValue);
    }, [recipes, recipeSearchValue]);

    return (
        <div className="recipes">
            <h2 className="recipes__header">Redux</h2>
            <input
                type="text"
                className="recipes__search"
                placeholder="Search"
                value={recipeSearchValue}
                onChange={e => setRecipeSearchValue(e.target.value)}
            />
            <RefreshButton isLoading={isLoading} onRefresh={addRandomRecipes} />
            <RecipeList
                recipes={matchingRecipes}
                incrementIngredientCounter={incrementIngredientCounter}
            />
        </div>
    );
}

interface RefreshButtonProps {
    isLoading: boolean;
    onRefresh: () => void;
}

function RefreshButton({ isLoading, onRefresh }: RefreshButtonProps) {
    if (isLoading) return <div className="spinning-loader" />;
    else {
        return (
            <button className="recipes__refresh" onClick={onRefresh}>
                Refresh
            </button>
        );
    }
}

interface RecipeListProps {
    recipes: Recipe[];
    incrementIngredientCounter: (recipeId: string, ingredientId: number) => void;
}

function RecipeList({ recipes, incrementIngredientCounter }: RecipeListProps) {
    const recipeElements = recipes.map(recipe => (
        <RecipeComponent
            key={recipe.id}
            recipe={recipe}
            onIngredientClick={ingredientIndex => {
                incrementIngredientCounter(recipe.id, ingredientIndex);
            }}
        />
    ));
    return <ul className="recipes__list">{recipeElements}</ul>;
}
