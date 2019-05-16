import React from "react";

export interface CommonIngredientProps {
    title: string;
    count: number;
    onClick: () => void;
}

export default function CommonIngredientItem({
    title,
    count,
    onClick
}: CommonIngredientProps) {
    return (
        <li className="recipe__ingredient" onClick={onClick}>
            {count} {title}
        </li>
    );
}
