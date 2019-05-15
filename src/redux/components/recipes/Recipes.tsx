import { connect } from "react-redux";
import { Recipe } from "../../../dataTypes/dataTypes";
import { addRandomRecipes, incrementIngredientCounter } from "../../store/actions";
import { ReduxState } from "../../store/reduxState";
import { RecipesComponent } from "./RecipesComponent";

export type RecipesProps = StateProps & DispatchProps;

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
    incrementIngredientCounter: (recipeId: string, ingredientId: number) => void;
}

function mapDispatchToProps(dispatch: any): DispatchProps {
    return {
        addRandomRecipes() {
            dispatch(addRandomRecipes());
        },
        incrementIngredientCounter(recipeId: string, ingredientId: number) {
            dispatch(incrementIngredientCounter(recipeId, ingredientId));
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RecipesComponent);
