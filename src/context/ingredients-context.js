import React, { useReducer, useCallback, useEffect } from "react";

import useHttp from "./../hooks/http";
import ENDPOINTS from "./../config/urls";

const initialState = {
    ingredients: []
};

const ingredientsReducer = (currentIngredients, action) => {
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

export const IngredientContext = React.createContext({
    ingredients: [],
    setIngredients: () => { },
    addIngredient: () => { },
    removeIngredient: () => { }
});

const IngredientContextProvider = props => {

	const {sendRequest, clear, isLoading, error, responseData, reqId } = useHttp();
    const [ingredientsState, ingredientsDispatch] = useReducer(ingredientsReducer, initialState);

    useEffect(() => {
        if(!isLoading && !error) {
            switch(reqId) {
                case "SET":
                    // * transform responseData
                    const ings = [];
                    for(let id in responseData) {
                        ings.push({
                            id: id,
                            ...responseData[id]
                        })
                    }
                    ingredientsDispatch({type: "", responseData});
                    break;
                default: 
                    break;
            }
        }
    }, [isLoading, error, responseData, reqId]);

    const handleSetIngredients = useCallback((ingredients) => {
        sendRequest(
            ENDPOINTS.INGREDIENTS.GET,
            "GET",
            null,
            "SET",
        )
    }, [sendRequest]);

    const handleAddIngredient = useCallback((ingredient) => {
        ingredientsDispatch({type: "", ingredient: ingredient});
    }, []);
    const handleRemoveIngredients = useCallback((id) => {
        ingredientsDispatch({type: "", id: id });
    }, []);

    return (
        <IngredientContext.Provider value={{
            ingredients: ingredientsState.ingredients,
            setIngredients: handleSetIngredients,
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