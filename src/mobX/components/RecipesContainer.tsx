import { observer } from "mobx-react-lite";
import React, { useCallback, useEffect, useContext } from "react";
import CommonRefreshButton from "../../common/components/CommonRefreshButton";
import CommonSearchField from "../../common/components/CommonSearchField";
import { MobXStore } from "../store/MobXStore";
import RecipeList from "./RecipeList";
import { ApplicationStateContext } from "./MobXPanel";

const RecipesContainer = observer(function RecipesContainer() {
    const state = useContext(ApplicationStateContext);

    useEffect(() => {
        state.downloadRandomRecipes();
    }, []);

    return (
        <div className="recipes">
            <h2 className="recipes__header">MobX</h2>
            <SearchField state={state} />
            <RefreshButton state={state} />
            <RecipeList state={state} />
        </div>
    );
});

export default RecipesContainer;

export interface ApplicationStateProps {
    state: MobXStore;
}

const SearchField = observer(function SearchField({ state }: ApplicationStateProps) {
    const onChange = useCallback((value: string) => (state.searchValue = value), [state]);
    return <CommonSearchField onChange={onChange} value={state.searchValue} />;
});

const RefreshButton = observer(function RefreshButton({ state }: ApplicationStateProps) {
    const onClick = useCallback(() => state.downloadRandomRecipes(), [state]);
    return <CommonRefreshButton isLoading={state.isLoading} onClick={onClick} />;
});
