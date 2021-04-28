import React, { useContext, useReducer, useState } from "react";

// * Components
import DrinksList from "../DrinksList/DrinksList";
import IngredientsList from "../../Ingredients/IngredientsList/IngredientsList";
import IngredientSelector from "../../Ingredients/IngredientSelector/IngredientSelector";

// * UI Components
import PrimaryButton from "../../UI/Button/PrimaryButton";

import Box from "@material-ui/core/Box";

// * Contexts
import { DrinkContext } from "./../../../context/drinks-context";

// * Initial State
const initialState = [];

// * Action types
const ADD_INGREDIENT = "ADD_INGREDIENT";
const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";
const CLEAR = "CLEAR";

const IngredientsReducer = (currentSelection, action) => {
    switch (action.type) {
        case ADD_INGREDIENT:
            return [...currentSelection, { ingredient_id: action.ingredient_id }];
        case REMOVE_INGREDIENT:
            return currentSelection.filter(ing => ing.ingredient_id !== action.ingredient_id);
        case CLEAR:
            return initialState;
        default:
            throw new Error(`[DrinksFilter] - Illegal Action Provided: ${action.type}`);
    }
}

const DrinksFilter = props => {

    // * prepare currently selected ingredient
    const [currentIngredientSelection, setCurrentIngredientSelection] = useState("");

    // * prepare drinks context
    const drinksContext = useContext(DrinkContext);

    // * prepare ingredients reducer
    const [ingredients, dispatchIngredients] = useReducer(IngredientsReducer, initialState);

    const onSelectIngredientHandler = (ingredient) => {
        setCurrentIngredientSelection(ingredient.ingredient_id);
    }

    const onRemoveIngredientHandler = (ingredient_id) => {
        dispatchIngredients({ type: REMOVE_INGREDIENT, ingredient_id: ingredient_id });
    }

    const onStoreIngredientHandler = () => {
        dispatchIngredients({ type: ADD_INGREDIENT, ingredient_id: currentIngredientSelection })
        setCurrentIngredientSelection("");
    }

    const selected_ids = ingredients.map(ing => ing.ingredient_id);

    // * filter drinks by selected ingredients
    const filteredDrinks = drinksContext.drinks.filter(drink => {
        // * use every for exact, some for non-exact
        return drink.ingredients.every(ing => selected_ids.includes(ing.ingredient_id));
    });

    return (
        <>
            <Box>
                <IngredientSelector
                    onSelectIngredient={onSelectIngredientHandler}
                    excludeIdList={selected_ids}
                />
                <PrimaryButton
                    onClick={onStoreIngredientHandler}
                    disabled={currentIngredientSelection === ""}
                >Add Ingredient</PrimaryButton>
            </Box>
            <Box>
                <IngredientsList
                    ingredients={ingredients}
                    onRemove={onRemoveIngredientHandler}
                />
            </Box>
            <DrinksList drinks={filteredDrinks} />
        </>
    )
}

export default DrinksFilter;