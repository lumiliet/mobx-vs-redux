import React from "react";
import { Provider } from "react-redux";
import { store } from "../store/reduxStore";
import RecipesContainer from "./RecipesContainer";

export default function ReduxPanel() {
    return (
        <Provider store={store}>
            <RecipesContainer />
        </Provider>
    );
}
