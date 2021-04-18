import React, { useContext } from "react";

import DrinkItem from "./../DrinkItem/DrinkItem";

import { DrinkContext } from "./../../../context/drinks-context";

import Auxillary from "./../../../hoc/Auxillary/Auxillary";

import Button from "./../../UI/Button/Button";

const DrinksList = (props) => {

    const drinksContext = useContext(DrinkContext);

    return (
        <Auxillary>
            {drinksContext.isLoading && <span>loading drinks...</span>}
            <ul className="drinks-list">
                {drinksContext.drinks && drinksContext.drinks.map(drink => {
                    return (
                        <li
                            key={drink.id}
                        >
                            <DrinkItem drink={drink} onclick={props.onclick} />
                            <Button onclick={drinksContext.removeDrink.bind(null, drink.id)}>Remove</Button>
                        </li>
                    )
                })}
            </ul>
        </Auxillary>
    )
}

export default DrinksList;