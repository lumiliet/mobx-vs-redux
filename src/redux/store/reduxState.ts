import { Recipe } from "../../dataTypes/dataTypes";

export interface ReduxState {
    recipesById: { [key: string]: Recipe };
    recipeIds: string[];
    isLoading: boolean;
}
