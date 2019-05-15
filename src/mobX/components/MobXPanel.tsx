import DevTools from "mobx-react-devtools";
import { observer } from "mobx-react-lite";
import React, { FC, useEffect } from "react";
import { MobXStore } from "../store/MobXStore";
import RecipeComponent from "./RecipeComponent";

const applicationState = new MobXStore();

const MobXPanel: FC = observer(function MobXPanel() {
    useEffect(() => {
        applicationState.downloadRandomRecipes();
    }, []);

    return (
        <div className="recipes">
            <h2 className="recipes__header">MobX</h2>
            <SearchField applicationState={applicationState} />
            <RefreshButton applicationState={applicationState} />
            <RecipeList applicationState={applicationState} />
            <DevTools />
        </div>
    );
});

interface ApplicationStateProps {
    applicationState: MobXStore;
}

const SearchField: FC<ApplicationStateProps> = observer(function SearchField({ applicationState }) {
    return (
        <input
            type="text"
            className="recipes__search"
            placeholder="Search"
            value={applicationState.recipeSearchValue}
            onChange={e => (applicationState.recipeSearchValue = e.target.value)}
        />
    );
});

const RefreshButton: FC<ApplicationStateProps> = observer(function RefreshButton({
    applicationState
}) {
    if (applicationState.isLoading) return <div className="spinning-loader" />;
    else {
        return (
            <button
                className="recipes__refresh"
                onClick={() => applicationState.downloadRandomRecipes()}
            >
                Refresh
            </button>
        );
    }
});

const RecipeList: FC<ApplicationStateProps> = observer(function RecipeList({ applicationState }) {
    const recipeElements = applicationState.matchingRecipes.map(recipe => (
        <RecipeComponent key={recipe.id} recipe={recipe} />
    ));
    return <ul className="recipes__list">{recipeElements}</ul>;
});

export default MobXPanel;
