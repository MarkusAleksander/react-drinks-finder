import React, { useContext, useReducer, useState } from "react";

import IngredientsList from "./../IngredientsList/IngredientsList";

import { IngredientContext } from "./../../../context/ingredients-context";

import Input from "./../../UI/Input/Input";
import Button from "./../../UI/Button/Button";

const initialState = [];

const ADD_INGREDIENT = "ADD_INGREDIENT";
const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";
const CLEAR_INGREDIENT = "CLEAR_INGREDIENT";

const selectedIngredientsReducer = (curSelectedIngredients, action) => {
    switch (action.type) {
        case ADD_INGREDIENT:
            return [...curSelectedIngredients, action.ingredient];
        case REMOVE_INGREDIENT:
            return curSelectedIngredients.filter(ingredient => ingredient.id !== action.id);
        case CLEAR_INGREDIENT:
            return [];
        default:
            throw new Error("Should not get here");
    }
}

const IngredientSelector = props => {

    // * list of saved ingredients
    const [selectedIngredients, dispatchSelectedIngredients] = useReducer(selectedIngredientsReducer, initialState);

    // * currently selected ingredient
    const [selectedIngredient, setSelectedIngredient] = useState("");

    // * ingredient context
    const ingredientContext = useContext(IngredientContext);

    const handleAddIngredient = () => {
        dispatchSelectedIngredients({ type: ADD_INGREDIENT, ingredient: selectedIngredient });
        setSelectedIngredient("");
    }

    const handleRemoveIngredient = (ingredient) => {
        dispatchSelectedIngredients({ type: REMOVE_INGREDIENT, ingredient: ingredient })
    }

    const handleClearAll = () => dispatchSelectedIngredients({ type: CLEAR_INGREDIENT })

    const onSelectIngredient = (e) => {
        setSelectedIngredient(e.target.value);
    }

    return (
        <>
            <IngredientsList ingredients={selectedIngredients} removeIngredient={handleRemoveIngredient} />
            <Input
                elementType="select"
                name="ingredients"
                value={selectedIngredient}
                changed={onSelectIngredient}
                options={ingredientContext.ingredients.map((ingredient => { return { displayValue: ingredient.ingredient, value: ingredient.id } }))}
            />
            <Button onclick={handleAddIngredient}>Add</Button>
        </>
    )
}

export default IngredientSelector;