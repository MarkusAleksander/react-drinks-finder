import React from "react";

import Card from "./../../UI/Card/Card";
import IngredientsList from "./../../Ingredients/IngredientsList/IngredientsList";

const DrinkItem = (props) => {
    return (
        <Card>
            <div className="drink-recipe-item">
                <p>{props.drink.title}</p>
            </div>
            <div className="drink-recipe-ingredients">
                <IngredientsList ingredients={props.drink.ingredients} />
            </div>
            <div className="drink-recipe-description">
                <p>{props.drink.description}</p>
            </div>
        </Card>
    )
}

export default DrinkItem;