import React, { useReducer } from "react";

import Card from "./../../UI/Card/Card";
import Input from "./../../UI/Input/Input";
import Button from "./../../UI/Button/Button";

// import formConfig from "./formConfig";

const drinksReducer = (currentDrinkData, action) => {
    switch (action.type) {
        case "UPDATE_TITLE":
            return { ...currentDrinkData, title: action.title }
        case "UPDATE_DESCRIPTION":
            return { ...currentDrinkData, description: action.description }
        case "ADD_INGREDIENT":
            return { ...currentDrinkData, ingredients: [...currentDrinkData.ingredients, action.ingredients] };
        case "DELETE_INGREDIENT":
            return { ...currentDrinkData, ingredients: currentDrinkData.ingredients.filter(ingredient => ingredient.id !== action.id) };
        case "CLEAR":
            return {
                title: "",
                description: "",
                ingredients: []
            }
        default:
            throw new Error("Should not get here");
    }
}

const DrinksForm = (props) => {

    // * prepare reducer for use
    const [drinksData, dispatchDrinks] = useReducer(drinksReducer, {
        title: "",
        description: "",
        ingredients: []
    });

    // * validate form
    const validateForm = () => {
        return true;
    }

    // * handle form submission
    const submitHandler = event => {
        event.preventDefault();

        if (validateForm()) {
            props.onAddDrink({
                title: drinksData.title,
                description: drinksData.description,
                ingredients: drinksData.ingredients
            });

            dispatchDrinks({ type: "CLEAR" });
        }
    }

    return (
        <Card>
            <form onSubmit={submitHandler}>
                <Input
                    name={"title"}
                    value={drinksData.title}
                    onchange={
                        event => dispatchDrinks({
                            type: "UPDATE_TITLE",
                            title: event.target.value
                        })}
                />
                <Input
                    name={"description"}
                    value={drinksData.description}
                    onchange={
                        event => dispatchDrinks({
                            type: "UPDATE_DESCRIPTION",
                            description: event.target.value
                        })}
                />
                <Button onclick={submitHandler} type="primary">Add Drink</Button>
            </form>
        </Card>
    );
}

export default DrinksForm;