export interface Recipe {
    id: string;
    title: string;
    ingredients: Ingredient[];
    instructions: string;
    image: string;
}

export interface Ingredient {
    id: string;
    title: string;
    count: number;
}
