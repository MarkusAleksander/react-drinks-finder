import React, { useState, useContext, useReducer } from "react";

// * Components
import Input from "./../../UI/Input/Input";
import IngredientBuilder from "./../../Ingredients/IngredientBuilder/IngredientBuilder";

// * UI Components
import PrimaryButton from "../../UI/Button/PrimaryButton";
import Grid from '@material-ui/core/Grid';

// * Contexts
import { DrinkContext } from "./../../../context/drinks-context";

// * Initial State
const initialState = [];

// * Action types
const ADD_INGREDIENT = "ADD_INGREDIENT";
const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";
const CLEAR_INGREDIENTS = "CLEAR_INGREDIENT";

const selectedIngredientsReducer = (curSelectedIngredients, action) => {
    switch (action.type) {
        case ADD_INGREDIENT:
            return [...curSelectedIngredients, action.ingredient_data];
        case REMOVE_INGREDIENT:
            return curSelectedIngredients.filter(ingredient_item => ingredient_item.ingredient_id !== action.ingredient_id);
        case CLEAR_INGREDIENTS:
            return initialState;
        default:
            throw new Error(`[DrinksForm.js] - Illegal Action Provided ${action.type}`);
    }
}

const DrinksForm = props => {

    // * prepare drinks context
    const drinksContext = useContext(DrinkContext);

    // * list of saved ingredients
    const [selectedIngredients, dispatchSelectedIngredients] = useReducer(selectedIngredientsReducer, initialState);

    // * drink states
    const [drinkTitle, setDrinkName] = useState("");
    const [drinkDesc, setDrinkDesc] = useState("");

    // * validate form
    const validateForm = () => {
        // TODO
        return true;
    }

    // * handle form submission
    const submitHandler = event => {
        event.preventDefault();

        if (validateForm()) {
            // * pass drinks date to context to save
            drinksContext.addDrink({
                title: drinkTitle,
                description: drinkDesc,
                ingredients: selectedIngredients
            });

            // * clear data
            handleClearData();
        }
    }

    // * handle adding ingredient item
    const handleAddIngredient = (ingredient_data) => {
        dispatchSelectedIngredients({ type: ADD_INGREDIENT, ingredient_data: ingredient_data });
    }

    // * handle remove ingredient item
    const handleRemoveIngredient = (ingredient_id) => {
        dispatchSelectedIngredients({ type: REMOVE_INGREDIENT, ingredient_id: ingredient_id })
    }

    // * clear up
    const handleClearData = () => {
        setDrinkName("");
        setDrinkDesc("");
        dispatchSelectedIngredients({ type: CLEAR_INGREDIENTS });
    }

    const determineDisabled = () => {
        return (
            drinkTitle === ""
            || drinkDesc === ""
            || !selectedIngredients.length
        );
    }

    return (
        <Grid container spacing={1} component="form" onSubmit={submitHandler}>
            <Grid item xs={12} sm={6}>
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
            </Grid>
            <Grid item xs={6} >
                <PrimaryButton
                    onClick={submitHandler}
                    disabled={determineDisabled()}
                >Add Drink</PrimaryButton>
            </Grid>
            <Grid item xs={12}>
                <Input
                    elementType="textarea"
                    name="description"
                    labelText="Description:"
                    value={drinkDesc}
                    onchange={
                        event => setDrinkDesc(event.target.value)
                    }
                />
            </Grid>
            <Grid item xs={12}>
                <IngredientBuilder
                    selectedIngredients={selectedIngredients}
                    addIngredient={handleAddIngredient}
                    removeIngredient={handleRemoveIngredient}
                />
            </Grid>
        </Grid>
    );
}

export default DrinksForm;