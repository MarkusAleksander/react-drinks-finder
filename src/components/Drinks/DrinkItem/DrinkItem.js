import React from "react";

import Card from "./../../UI/Card/Card";

const DrinkItem = (props) => {
    return (
        <Card>
            <div className="drink-recipe-item">
                <p>{props.drink.title}</p>
            </div>
            <div className="drink-recipe-ingredients">
                <p>Ingredients here</p>
            </div>
            <div className="drink-recipe-description">
                <p>{props.drink.description}</p>
            </div>
        </Card>
    )
}

export default DrinkItem;