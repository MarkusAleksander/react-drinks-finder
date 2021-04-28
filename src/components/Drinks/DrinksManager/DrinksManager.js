import React, { useContext } from "react";

// * Components
import DrinksForm from "../DrinksForm/DrinksForm";
import DrinksList from "../DrinksList/DrinksList";

import Grid from "@material-ui/core/Grid";

// * Contexts
import { DrinkContext } from "./../../../context/drinks-context";

const DrinksManager = props => {
    const drinksContext = useContext(DrinkContext);

    return (
        <Grid container>
            <Grid xs={12}>
                <DrinksForm />
            </Grid>
            <Grid xs={12}>
                <DrinksList
                    drinks={drinksContext.drinks}
                    onRemove={drinksContext.removeDrink}
                />
            </Grid>
        </Grid>
    )
}

export default DrinksManager;