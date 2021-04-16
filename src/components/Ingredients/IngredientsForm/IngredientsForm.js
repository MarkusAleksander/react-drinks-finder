import React, { useState } from "react";

import Card from "../../UI/Card/Card";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

const IngredientsForm = (props) => {

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
            props.onAddIngredient(ingredient);
            setIngredient("");
        }
    }

    return (
        <Card>
            <form onSubmit={submitHandler}>
                <Input
                    name={ingredient}
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