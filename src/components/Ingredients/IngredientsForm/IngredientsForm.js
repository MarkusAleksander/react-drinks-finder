import React, { useState, useContext } from "react";

// * Components
import Card from "../../UI/Card/Card";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

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
        <Card>
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
                <Button type="primary" onclick={submitHandler}>Add Ingredient</Button>
            </div>
        </Card>
    );
}

export default IngredientsForm;