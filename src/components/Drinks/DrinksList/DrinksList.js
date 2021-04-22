import React, { useContext } from "react";

// * Components
import DrinkItem from "./../DrinkItem/DrinkItem";

// * Contexts
import { DrinkContext } from "./../../../context/drinks-context";

const DrinksList = props => {

    const drinksContext = useContext(DrinkContext);

    return (
        <>
            {
                drinksContext.isLoading && (!props.drinks || !props.drinks.length)
                    ? <p>Loading Drinks...</p>
                    : <>
                        {drinksContext.isLoading && <p>Updating drinks...</p>}
                        <ul className="drinks-list">
                            {props.drinks && props.drinks.map(drink => {
                                return (
                                    <li
                                        key={drink.drink_id}
                                    >
                                        <DrinkItem
                                            drink={drink}
                                            onclick={props.onclick}
                                            onclickText={props.onclickText}
                                        />
                                    </li>
                                )
                            })}
                        </ul>
                    </>
            }
        </>
    )
}

export default DrinksList;