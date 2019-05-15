import React from "react";
import { Provider } from "react-redux";
import { store } from "../store/reduxStore";
import Recipes from "./recipes/Recipes";

export default function ReduxPanel() {
    return (
        <Provider store={store}>
            <Recipes />
        </Provider>
    );
}
