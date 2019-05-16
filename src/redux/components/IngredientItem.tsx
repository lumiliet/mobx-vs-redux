import { connect } from "react-redux";
import { incrementIngredientCounter } from "../store/actions";
import CommonIngredientItem, {
    CommonIngredientProps
} from "../../common/components/CommonIngredientItem";
import { Ingredient } from "../../common/dataTypes/dataTypes";

interface OwnProps {
    ingredient: Ingredient;
    recipeId: string;
    ingredientIndex: number;
}

interface DispatchProps {
    onClick: () => void;
}

function mapDispatchToProps(dispatch: any, props: OwnProps): DispatchProps {
    const { recipeId, ingredientIndex } = props;

    return {
        onClick() {
            dispatch(incrementIngredientCounter(recipeId, ingredientIndex));
        }
    };
}

function mergeProps(
    _: null,
    dispatchProps: DispatchProps,
    ownProps: OwnProps
): CommonIngredientProps {
    const { ingredient } = ownProps;
    return {
        ...dispatchProps,
        ...ingredient
    };
}

export default connect(
    null,
    mapDispatchToProps,
    mergeProps
)(CommonIngredientItem);
