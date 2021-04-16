import React, { useCallback, useEffect, useReducer } from "react";

import Auxillary from "./../../../hoc/Auxillary/Auxillary";

import IngredientForm from "../IngredientsForm/IngredientsForm";
import IngredientList from "../IngredientsList/IngredientsList";

import useHttp from "./../../../hooks/http";
import URL_CONFIG from "./../../../config/urls";

const ADD_INGREDIENT = "ADD_INGREDIENT";
const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";

const ingredientReducer = (currentIngredients, action) => {
    switch (action.type) {
        case "SET":
            return action.ingredients;
        case "ADD":
            return [...currentIngredients, action.ingredient];
        case "DELETE":
            return currentIngredients.filter(ingredient => ingredient.id !== action.id);
        default:
            throw new Error("Should not get here");
    }
}

const IngredientManager = () => {

    const { isLoading, error, responseData, reqId, reqExtra, sendRequest } = useHttp();
    const [ingredients, dispatchIngredients] = useReducer(ingredientReducer, []);

    useEffect(() => {
        if (!isLoading && !error) {
            switch (reqId) {
                case ADD_INGREDIENT:
                    dispatchIngredients({
                        type: "ADD",
                        ingredient: {
                            ...reqExtra,
                            id: responseData.name
                        }
                    });
                    break;
                case REMOVE_INGREDIENT:
                    dispatchIngredients({
                        type: "DELETE",
                        id: reqExtra
                    });
                    break;
                default:
                    break
            }
        }
    }, [isLoading, error, reqId, reqExtra, responseData]);

    const handleAddIngredient = useCallback((ingredient) => {
        sendRequest(
            URL_CONFIG.INGREDIENTS.POST,
            "POST",
            JSON.stringify({ ingredient }),
            ADD_INGREDIENT,
            { ingredient: ingredient },
        )
    }, [sendRequest]);

    const handleRemoveIngredient = useCallback((ingredientId) => {
        sendRequest(
            URL_CONFIG.INGREDIENTS.DELETE,
            "DELETE",
            ingredientId,
            REMOVE_INGREDIENT,
            { id: ingredientId }
        )
    }, [sendRequest]);

    return (
        <Auxillary>
            <IngredientForm onAddIngredient={handleAddIngredient} />
            {isLoading && <span>Is loading...</span>}
            <IngredientList ingredients={ingredients} onclick={handleRemoveIngredient} />
        </Auxillary>
    )
}

export default IngredientManager;