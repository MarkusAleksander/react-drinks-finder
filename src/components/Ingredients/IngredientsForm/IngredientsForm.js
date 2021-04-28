import React, { useState, useContext } from "react";

// * Components
import Input from "../../UI/Input/Input";

// * UI Components
import PrimaryButton from "../../UI/Button/PrimaryButton";
import Grid from "@material-ui/core/Grid";

// * Contexts
import { IngredientContext } from "./../../../context/ingredients-context";

const IngredientsForm = props => {

    const ingredientsContext = useContext(IngredientContext);

    // * prepare state
    const [ingredient, setIngredient] = useState("");

    // * validate form
    const validateForm = () => {
        // TODO
        return true;
    }

    // * handle form submission
    const submitHandler = event => {
        event.preventDefault();

        if (validateForm()) {
            // * Save ingredient via context
            ingredientsContext.addIngredient(ingredient);
            setIngredient("");
        }
    }

    return (
        <Grid container spacing={1} component="form" onSubmit={submitHandler}>
            <Grid item xs={12}>
                <Input
                    type="text"
                    elementType="input"
                    labelText="Ingredient:"
                    name="ingredient"
                    value={ingredient}
                    onchange={
                        event => setIngredient(event.target.value)
                    }
                />
            </Grid>
            <Grid item xs={12}>
                <PrimaryButton
                    onClick={submitHandler}
                    disabled={ingredient === ""}
                >Add Ingredient</PrimaryButton>
            </Grid>
        </Grid>
    );
}

export default IngredientsForm;