import { action, computed, observable, runInAction } from "mobx";
import { Recipe } from "../../common/dataTypes/dataTypes";
import { searchRecipes } from "../../common/utilities";
import { fetchRandomRecipes } from "../../common/api/mealDBApi";

export class MobXStore {
    @observable recipes: Recipe[] = [];
    @observable searchValue = "";
    @observable isLoading = false;

    @computed get matchingRecipes() {
        return searchRecipes(this.recipes, this.searchValue);
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
