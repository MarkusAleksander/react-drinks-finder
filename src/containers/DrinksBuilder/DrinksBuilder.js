import React from "react";

// * Components
import IngredientsManager from "../../components/Ingredients/IngredientsManager/IngredientsManager";
import DrinksManager from "../../components/Drinks/DrinksManager/DrinksManager";

// * UI Components
import Grid from "@material-ui/core/Grid";

const DrinksBuilder = () => {
    return (
        <Grid container>
            <Grid item xs={12} md={4}>
                <IngredientsManager />
            </Grid>
            <Grid item xs={12} md={8}>
                <DrinksManager />
            </Grid>
        </Grid>
    )
}

export default DrinksBuilder;