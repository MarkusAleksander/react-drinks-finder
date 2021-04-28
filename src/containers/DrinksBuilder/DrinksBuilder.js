import React from "react";

// * Components
import IngredientsManager from "../../components/Ingredients/IngredientsManager/IngredientsManager";
import DrinksManager from "../../components/Drinks/DrinksManager/DrinksManager";

// * UI Components
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const DrinksBuilder = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
                <Paper elevation={5}>
                    <IngredientsManager />
                </Paper>
            </Grid>
            <Grid item xs={12} md={8}>
                <Paper elevation={5}>
                    <DrinksManager />
                </Paper>
            </Grid>
        </Grid>
    )
}

export default DrinksBuilder;