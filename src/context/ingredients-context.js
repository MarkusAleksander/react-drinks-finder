import React, { useReducer, useCallback, useEffect } from "react";

import useHttp from "./../hooks/http";
import ENDPOINTS from "./../config/urls";

const initialState = [];

const SET_INGREDIENT = "SET_INGREDIENT";
const ADD_INGREDIENT = "ADD_INGREDIENT";
const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";

const ingredientsReducer = (currentIngredients, action) => {
    switch (action.type) {
        case SET_INGREDIENT:
            return action.ingredients;
        case ADD_INGREDIENT:
            return [...currentIngredients, action.ingredient];
        case REMOVE_INGREDIENT:
            return currentIngredients.filter(ingredient => ingredient.id !== action.id);
        default:
            throw new Error("Should not get here");
    } 
}

export const IngredientContext = React.createContext({
    ingredients: [],
    isLoading: false,
    clear: () => { },
    loadIngredients: () => { },
    addIngredient: () => { },
    removeIngredient: () => { }
});

const IngredientContextProvider = props => {

	const {sendRequest, clear, isLoading, error, responseData, reqId, reqExtra } = useHttp();
    const [ingredientsState, ingredientsDispatch] = useReducer(ingredientsReducer, initialState);

    const handleLoadIngredients = useCallback(() => {
        sendRequest(
            ENDPOINTS.INGREDIENTS.GET,
            "GET",
            null,
            SET_INGREDIENT,
        )
    }, [sendRequest]);

    const handleAddIngredient = useCallback((ingredient) => {
        sendRequest(
            ENDPOINTS.INGREDIENTS.POST,
            "POST",
            JSON.stringify({ ingredient }),
            ADD_INGREDIENT,
            { ingredient: ingredient },
        )
    }, [sendRequest]);
    const handleRemoveIngredients = useCallback((id) => {
        sendRequest(
            ENDPOINTS.INGREDIENTS.DELETE.concat(`${id}.json`),
            "DELETE",
            id,
            REMOVE_INGREDIENT,
            { id: id  }
        )
    }, [sendRequest]);

    useEffect(() => {
        console.log("Getting ingredients");
        handleLoadIngredients();
    }, [handleLoadIngredients]);

    useEffect(() => {
        if(!isLoading && !error) {
            switch(reqId) {
                case SET_INGREDIENT:
                    // * transform responseData
                    const ings = [];
                    for(let id in responseData) {
                        ings.push({
                            id: id,
                            ...responseData[id]
                        })
                    }
                    ingredientsDispatch({type: reqId, ingredients: ings});
                    break;
                case ADD_INGREDIENT:
                    
                    ingredientsDispatch({type: reqId, ingredient: {
                        id: responseData.name,
                        ...reqExtra
                    }});
                    break;
                case REMOVE_INGREDIENT:
                    ingredientsDispatch({type: reqId, id: reqExtra.id});
                    break;
                default: 
                    break;
            }
        }
    }, [isLoading, error, responseData, reqId, reqExtra]);

    return (
        <IngredientContext.Provider value={{
            ingredients: ingredientsState,
            loadIngredients: handleLoadIngredients,
            addIngredient: handleAddIngredient,
            removeIngredient: handleRemoveIngredients,
            isLoading: isLoading,
            clear: clear
        }}>
            {props.children}
        </IngredientContext.Provider>
    )
}

export default IngredientContextProvider