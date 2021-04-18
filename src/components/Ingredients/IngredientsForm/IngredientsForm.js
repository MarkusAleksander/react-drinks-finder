import React, { useState, useContext } from "react";

import Card from "../../UI/Card/Card";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

import { IngredientContext } from "./../../../context/ingredients-context";

const IngredientsForm = (props) => {

    const ingredientsContext = useContext(IngredientContext);

    // * prepare state
    const [ingredient, setIngredient] = useState("");

    // * validate form
    const validateForm = () => {
        return true;
    }

    // * handle form submission
    const submitHandler = event => {
        event.preventDefault();

        if (validateForm()) {
            ingredientsContext.addIngredient(ingredient);
            setIngredient("");
        }
    }

    return (
        <Card>
            <form onSubmit={submitHandler}>
                <Input
                    labelText={"Ingredient:"}
                    name="ingredient"
                    value={ingredient}
                    onchange={
                        event => setIngredient(event.target.value)
                    }
                />
                <Button type="primary">Add Ingredient</Button>
            </form>
        </Card>
    );
}

export default IngredientsForm;