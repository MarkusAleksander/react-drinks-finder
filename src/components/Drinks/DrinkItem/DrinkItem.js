import React from "react";

import Card from "./../../UI/Card";

const DrinkItem = (props) => {
    return (
        <Card>
            <div className="drink-recipe-item">
                <p>{props.drink.title}</p>
            </div>
        </Card>
    )
}

export default DrinkItem;