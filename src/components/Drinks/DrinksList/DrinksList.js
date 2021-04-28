import React, { useContext } from "react";

// * Components
import DrinkItem from "./../DrinkItem/DrinkItem";

// * UI Components
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';

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
                        <Grid container spacing={2}>
                            {props.drinks && props.drinks.map(drink => {
                                return (
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        lg={4}
                                        key={drink.drink_id}
                                    >
                                        <DrinkItem
                                            drink={drink}
                                            onRemove={props.onRemove}
                                        />
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </>
            }
        </>
    )
}

export default DrinksList;