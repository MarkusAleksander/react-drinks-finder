import React from "react";

import DrinkRecipeItem from "./DrinkRecipeItem/DrinkRecipeItem";

const DrinksList = (props) => {
    return (
        <ul className="drink-recipe-list">
            {props.drinks.map(drink => {
                return (
                    <li>
                        <DrinkRecipeItem drink={drink} />
                    </li>
                )
            })}
        </ul>
    )
}

export default DrinksList;