import React, { createContext } from "react";
import RecipesContainer from "./RecipesContainer";
import { MobXStore } from "../store/MobXStore";

export const ApplicationStateContext = createContext<MobXStore>(null!);

const applicationState = new MobXStore();

export default function MobXPanel() {
    return (
        <ApplicationStateContext.Provider value={applicationState}>
            <RecipesContainer />
        </ApplicationStateContext.Provider>
    );
}
