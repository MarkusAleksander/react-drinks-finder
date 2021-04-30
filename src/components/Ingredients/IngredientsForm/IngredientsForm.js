import React, { useState, useContext } from "react";

// * Components
import Input from "../../UI/Input/Input";

// * UI Components
import PrimaryButton from "../../UI/Button/PrimaryButton";
import GridContainer from './../../UI/GridContainer/GridContainer';
import GridItem from "./../../UI/GridItem/GridItem";

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
        <GridContainer component="form" onSubmit={submitHandler}>
            <GridItem xs={12}>
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
            </GridItem>
            <GridItem xs={12}>
                <PrimaryButton
                    onClick={submitHandler}
                    disabled={ingredient === ""}
                    alignment="center"
                >Add Ingredient</PrimaryButton>
            </GridItem>
        </GridContainer>
    );
}

export default IngredientsForm;