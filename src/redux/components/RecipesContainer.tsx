import React, { memo, useEffect, useState } from "react";
import { connect } from "react-redux";
import CommonRefreshButton from "../../common/components/CommonRefreshButton";
import CommonSearchField from "../../common/components/CommonSearchField";
import { Recipe } from "../../common/dataTypes/dataTypes";
import { addRandomRecipes } from "../store/actions";
import { ReduxState } from "../store/reduxState";
import RecipeList from "./RecipeList";

export type RecipesProps = StateProps & DispatchProps;

function RecipesContainer({ addRandomRecipes, recipes, isLoading }: RecipesProps) {
    useEffect(() => {
        addRandomRecipes();
    }, []);

    const [searchValue, setSearchValue] = useState("");

    return (
        <div className="recipes">
            <h2 className="recipes__header">Redux</h2>
            <SearchField value={searchValue} onChange={setSearchValue} />
            <RefreshButton isLoading={isLoading} onClick={addRandomRecipes} />
            <RecipeList recipes={recipes} searchQuery={searchValue} />
        </div>
    );
}

const SearchField = memo(CommonSearchField);
const RefreshButton = memo(CommonRefreshButton);

interface StateProps {
    recipes: Recipe[];
    isLoading: boolean;
}

function mapStateToProps(state: ReduxState): StateProps {
    const { isLoading, recipeIds, recipesById } = state;
    const recipes = recipeIds.map(id => recipesById[id]);

    return {
        isLoading,
        recipes
    };
}

interface DispatchProps {
    addRandomRecipes: () => void;
}

export default connect(
    mapStateToProps,
    { addRandomRecipes }
)(RecipesContainer);
