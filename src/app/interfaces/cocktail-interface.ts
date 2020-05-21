export interface CocktailList {
    drinks: Cocktail[],
    ctrName?: string
}

export interface Cocktail {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
}