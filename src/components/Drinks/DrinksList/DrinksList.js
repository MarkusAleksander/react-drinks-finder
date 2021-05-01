import React, { useContext } from "react";

// * Components
import DrinkItem from "./../DrinkItem/DrinkItem";

// * UI Components
import GridContainer from './../../UI/GridContainer/GridContainer';
import GridItem from "./../../UI/GridItem/GridItem";

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
                        <GridContainer>
                            {props.drinks && props.drinks.map(drink => {
                                return (
                                    <GridItem
                                        xs={12}
                                        md={6}
                                        lg={4}
                                        key={drink.drink_id}
                                    >
                                        <DrinkItem
                                            drink={drink}
                                            onRemove={props.onRemove}
                                        />
                                    </GridItem>
                                )
                            })}
                        </GridContainer>
                    </>
            }
        </>
    )
}

export default DrinksList;