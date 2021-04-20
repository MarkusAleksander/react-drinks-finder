import React from "react";

import DrinkItem from "./../DrinkItem/DrinkItem";

import Button from "./../../UI/Button/Button";

const DrinksList = (props) => {

    return (
        <>
            <ul className="drinks-list">
                {props.drinks && props.drinks.map(drink => {
                    return (
                        <li
                            key={drink.id}
                        >
                            <DrinkItem drink={drink} onclick={props.onclick} />
                            <Button onclick={() => props.removeDrink(drink.id)}>Remove</Button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default DrinksList;