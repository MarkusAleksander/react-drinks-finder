import React, { useState, useContext, useReducer } from "react";

import Card from "./../../UI/Card/Card";
import Input from "./../../UI/Input/Input";
import Button from "./../../UI/Button/Button";

import IngredientSelector from "./../../Ingredients/IngredientSelector/IngredientSelector";

import { DrinkContext } from "./../../../context/drinks-context";

const initialState = [];

const ADD_INGREDIENT = "ADD_INGREDIENT";
const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";
const CLEAR_INGREDIENTS = "CLEAR_INGREDIENT";

const selectedIngredientsReducer = (curSelectedIngredients, action) => {
    switch (action.type) {
        case ADD_INGREDIENT:
            return [...curSelectedIngredients, action.ingredient];
        case REMOVE_INGREDIENT:
            return curSelectedIngredients.filter(ingredient => ingredient.ingredient_id !== action.ingredient_id);
        case CLEAR_INGREDIENTS:
            return initialState;
        default:
            throw new Error("Should not get here");
    }
}

const DrinksForm = (props) => {

    // * list of saved ingredients
    const [selectedIngredients, dispatchSelectedIngredients] = useReducer(selectedIngredientsReducer, initialState);

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
                description: drinkDesc,
                ingredients: selectedIngredients
            });

            setDrinkName("");
            setDrinkDesc("");
            dispatchSelectedIngredients({ type: CLEAR_INGREDIENTS });
        }
    }

    const handleAddIngredient = (ing_data) => {
        dispatchSelectedIngredients({ type: ADD_INGREDIENT, ingredient: ing_data });
    }

    const handleRemoveIngredient = (ingredient_id) => {
        dispatchSelectedIngredients({ type: REMOVE_INGREDIENT, ingredient_id: ingredient_id })
    }

    // const handleClearAll = () => dispatchSelectedIngredients({ type: CLEAR_INGREDIENT })

    return (
        <Card>
            <form onSubmit={submitHandler}>
                <Input
                    type="text"
                    elementType="input"
                    name="title"
                    labelText="Drink Title:"
                    value={drinkTitle}
                    onchange={
                        event => setDrinkName(event.target.value)
                    }
                />
                <Input
                    elementType="textarea"
                    name="description"
                    labelText="Description:"
                    value={drinkDesc}
                    onchange={
                        event => setDrinkDesc(event.target.value)
                    }
                />
                <IngredientSelector
                    selectedIngredients={selectedIngredients}
                    addIngredient={handleAddIngredient}
                    removeIngredient={handleRemoveIngredient}
                />
                <Button onclick={submitHandler} type="primary">Add Drink</Button>
            </form>
        </Card>
    );
}

export default DrinksForm;