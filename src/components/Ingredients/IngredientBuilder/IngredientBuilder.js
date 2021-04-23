import React, { useReducer } from "react";

// * Components
import IngredientsList from "./../IngredientsList/IngredientsList";
import IngredientSelector from "./../IngredientSelector/IngredientSelector";
import Input from "./../../UI/Input/Input";
import Button from "./../../UI/Button/Button";

// * Configs
import selectableMeasurements from "./../../../config/measurements";

// * Initial State
const initialState = {
    // * selected ingredient id
    ingredient_id: "",
    // * selected measurement
    measurement: "",
    // * selected quantity
    quantity: ""
}

// * Action types
const ADD_INGREDIENT = "ADD_INGREDIENT";
const ADD_MEASUREMENT = "ADD_MEASUREMENT";
const ADD_QUANTITY = "ADD_QUANTITY";
const CLEAR = "CLEAR";

const IngredientBuilderReducer = (currentSelection, action) => {
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
            throw new Error(`[IngredientBuilder.js] - Illegal Action Provided: ${action.type}`);
    }
}

const IngredientBuilder = props => {
    // * set up reducers
    const [selectedIngredient, dispatchSelectedIngredient] = useReducer(IngredientBuilderReducer, initialState);

    // * handle adding (saving) ingredient
    const handleAddIngredient = (e) => {
        e.preventDefault();
        // * pass data up to parent
        props.addIngredient(selectedIngredient);
        // * clear data
        dispatchSelectedIngredient({ type: CLEAR });
    }

    // * handle removing ingredient
    const handleRemoveIngredient = (ingredient_id) => {
        // * pass ingredient id up to parent
        props.removeIngredient(ingredient_id);
    }

    // * handle selecting ingredient in form
    const onSelectIngredient = (data) => {
        dispatchSelectedIngredient({ type: ADD_INGREDIENT, ingredient_id: data.ingredient_id });
    }

    // * handle selecting measurement in form
    const onSelectMeasurement = (e) => {
        dispatchSelectedIngredient({ type: ADD_MEASUREMENT, measurement: e.target.value });
    }

    // * handle entering quantity in form
    const onEnterQuantity = (e) => {
        dispatchSelectedIngredient({ type: ADD_QUANTITY, quantity: e.target.value });
    }

    return (
        <>
            <IngredientsList
                ingredients={props.selectedIngredients}
                removeIngredient={handleRemoveIngredient}
            />
            <IngredientSelector
                onSelectIngredient={onSelectIngredient}
                excludeIdList={props.selectedIngredients.map(ing => ing.ingredient_id)}
            />
            <Input
                elementType="text"
                type="number"
                name="quantity"
                value={selectedIngredient.quantity}
                onchange={onEnterQuantity}
                labelText="Quantity:"
            />
            <Input
                elementType="select"
                name="measurement"
                value={selectedIngredient.measurement}
                changed={onSelectMeasurement}
                options={selectableMeasurements}
            />
            <Button onclick={handleAddIngredient}>Add</Button>
        </>
    )
}

export default IngredientBuilder;