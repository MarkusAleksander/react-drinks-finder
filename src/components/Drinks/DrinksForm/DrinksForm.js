import React, { useState, useContext } from "react";

import Card from "./../../UI/Card/Card";
import Input from "./../../UI/Input/Input";
import Button from "./../../UI/Button/Button";

import { DrinkContext } from "./../../../context/drinks-context";

const DrinksForm = (props) => {

    const drinksContext = useContext(DrinkContext);

    const [drinkTitle, setDrinkName] = useState("");
    const [drinkDesc, setDrinkDesc] = useState("");

    // * validate form
    const validateForm = () => {
        return true;
    }

    // * handle form submission
    const submitHandler = event => {
        event.preventDefault();

        if (validateForm()) {
            drinksContext.addDrink({
                title: drinkTitle,
                description: drinkDesc
            });

            setDrinkName("");
            setDrinkDesc("");
        }
    }

    return (
        <Card>
            <form onSubmit={submitHandler}>
                <Input
                    name="title"
                    value={drinkTitle}
                    onchange={
                        event => setDrinkName(event.target.value)
                    }
                />
                <Input
                    name="description"
                    value={drinkDesc}
                    onchange={
                        event => setDrinkDesc(event.target.value)
                    }
                />
                <Button onclick={submitHandler} type="primary">Add Drink</Button>
            </form>
        </Card>
    );
}

export default DrinksForm;