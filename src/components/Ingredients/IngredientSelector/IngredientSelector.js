import React, { useContext, useState, useReducer } from "react";

import IngredientsList from "./../IngredientsList/IngredientsList";

import { IngredientContext } from "./../../../context/ingredients-context";

import Input from "./../../UI/Input/Input";
import Button from "./../../UI/Button/Button";

const selectableMeasurements = [
    {
        value: "",
        displayValue: "Select Measurement",
        selected: true
    },
    {
        value: "ml",
        displayValue: "millilitres"
    },
    {
        value: "l",
        displayValue: "litres"
    },
    {
        value: "g",
        displayValue: "grams"
    },
    {
        value: "tspn",
        displayValue: "tspn"
    },
    {
        value: "tblspn",
        displayValue: "tblspn"
    }
];

const initialState = {
    ingredient_id: "",
    measurement: "",
    quantity: ""
}

const ADD_INGREDIENT = "ADD_INGREDIENT";
const ADD_MEASUREMENT = "ADD_MEASUREMENT";
const ADD_QUANTITY = "ADD_QUANTITY";
const CLEAR = "CLEAR";

const ingredientSelectorReducer = (currentSelection, action) => {
    switch (action.type) {
        case ADD_INGREDIENT:
            return { ...currentSelection, ingredient_id: action.ingredient_id };
        case ADD_MEASUREMENT:
            return { ...currentSelection, measurement: action.measurement };
        case ADD_QUANTITY:
            return { ...currentSelection, quantity: action.quantity };
        case CLEAR:
            return initialState;
        default:
            throw new Error("Shouldn't get here");
    }
}

const IngredientSelector = props => {
    const [selectedIngredient, dispatchSelectedIngredient] = useReducer(ingredientSelectorReducer, initialState);

    // * ingredient context
    const ingredientContext = useContext(IngredientContext);

    const handleAddIngredient = (e) => {
        e.preventDefault();
        props.addIngredient(selectedIngredient);
        dispatchSelectedIngredient({ type: CLEAR });
    }

    const handleRemoveIngredient = (ingredient_id) => {
        props.removeIngredient(ingredient_id);
    }

    const onSelectIngredient = (e) => {
        dispatchSelectedIngredient({ type: ADD_INGREDIENT, ingredient_id: e.target.value });
    }

    const onSelectMeasurement = (e) => {
        dispatchSelectedIngredient({ type: ADD_MEASUREMENT, measurement: e.target.value });
    }

    const onEnterQuantity = (e) => {
        dispatchSelectedIngredient({ type: ADD_QUANTITY, quantity: e.target.value });
    }

    const selectOptions = [
        {
            displayValue: "Select Ingredient",
            value: "",
            selected: true
        },
        ...ingredientContext.ingredients.map((ingredient => {
            return {
                displayValue: ingredient.ingredient,
                value: ingredient.ingredient_id,
                selected: selectedIngredient.ingredient === ingredient.ingredient_id
            }
        }))
    ];

    return (
        <>
            <IngredientsList ingredients={props.selectedIngredients} removeIngredient={handleRemoveIngredient} />
            <Input
                elementType="select"
                name="ingredients"
                value={selectedIngredient.ingredient}
                changed={onSelectIngredient}
                options={selectOptions}
            />
            <Input
                elementType="select"
                name="measurement"
                value={selectedIngredient.measurement}
                changed={onSelectMeasurement}
                options={selectableMeasurements}
            />
            <Input
                elementType="text"
                name="quantity"
                value={selectedIngredient.quantity}
                onchange={onEnterQuantity}
                labelText="Quantity:"
            />
            <Button onclick={handleAddIngredient}>Add</Button>
        </>
    )
}

export default IngredientSelector;