import React, { useContext } from "react";

// * Components
import DrinkItem from "./../DrinkItem/DrinkItem";

// * UI Components
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

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
                        <List className="drinks-list">
                            {props.drinks && props.drinks.map(drink => {
                                return (
                                    <ListItem
                                        key={drink.drink_id}
                                    >
                                        <DrinkItem
                                            drink={drink}
                                            onRemove={props.onRemove}
                                        />
                                    </ListItem>
                                )
                            })}
                        </List>
                    </>
            }
        </>
    )
}

export default DrinksList;