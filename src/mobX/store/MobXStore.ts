import { action, computed, observable, runInAction } from "mobx";
import { Recipe } from "../../dataTypes/dataTypes";
import { fetchRandomRecipes } from "../../api/mealDBApi";
import { searchRecipes } from "../../utilities";

export class MobXStore {
    @observable recipes: Recipe[] = [];
    @observable recipeSearchValue = "";
    @observable isLoading = false;

    @computed get matchingRecipes() {
        return searchRecipes(this.recipes, this.recipeSearchValue);
    }

    @action async downloadRandomRecipes() {
        this.isLoading = true;

        const recipes = await fetchRandomRecipes();

        runInAction("downloadRandomRecipes", () => {
            this.recipes = recipes;
            this.isLoading = false;
        });
    }
}
