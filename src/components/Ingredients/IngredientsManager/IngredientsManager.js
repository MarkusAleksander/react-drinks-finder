import React, { useContext } from "react";

// * Components
import IngredientsForm from "../IngredientsForm/IngredientsForm";
import IngredientList from "../IngredientsList/IngredientsList";

import Grid from "@material-ui/core/Grid";

// * Contexts
import { IngredientContext } from "./../../../context/ingredients-context";

const IngredientsManager = props => {
    const ingredientsContext = useContext(IngredientContext);

    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <IngredientsForm />
            </Grid>
            <Grid item xs={12}>
                <IngredientList
                    ingredients={ingredientsContext.ingredients}
                    onRemove={ingredientsContext.removeIngredient}
                />
            </Grid>
        </Grid>

    )
}

export default IngredientsManager;