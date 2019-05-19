import { observer } from "mobx-react-lite";
import React, { useCallback } from "react";
import CommonIngredientItem from "../../common/components/CommonIngredientItem";
import { Ingredient } from "../../common/dataTypes/dataTypes";

interface IngredientProps {
    ingredient: Ingredient;
}

function IngredientItem({ ingredient }: IngredientProps) {
    const { title, count } = ingredient;
    const onClick = useCallback(() => ingredient.count++, [ingredient]);
    return <CommonIngredientItem title={title} count={count} onClick={onClick} />;
}

export default observer(IngredientItem);
