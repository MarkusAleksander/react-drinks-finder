import React from "react";

// * Components
import DrinksFilter from "./../../components/Drinks/DrinksFilter/DrinksFilter";

// * UI Components
import Grid from "@material-ui/core/Grid";


const DrinksFinder = () => {
    return (
        <Grid container>
            <Grid item>
                <DrinksFilter />
            </Grid>
        </Grid>
    )
}

export default DrinksFinder;