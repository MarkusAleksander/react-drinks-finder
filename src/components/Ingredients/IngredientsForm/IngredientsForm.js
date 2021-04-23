import React, { useState, useContext } from "react";

// * Components
import SimpleCard from "../../UI/SimpleCard/SimpleCard";
import Input from "../../UI/Input/Input";

// * UI Components
import PrimaryButton from "../../UI/Button/PrimaryButton";

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
        <SimpleCard>
            <div>
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
                <PrimaryButton
                    onclick={submitHandler}
                    disabled={ingredient === ""}
                >Add Ingredient</PrimaryButton>
            </div>
        </SimpleCard>
    );
}

export default IngredientsForm;