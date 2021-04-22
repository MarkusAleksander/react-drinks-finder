import React, { useReducer, useCallback, useEffect } from "react";

import useHttp from "./../hooks/http";
import ENDPOINTS from "./../config/urls";

const initialState = [];

const SET_DRINK = "SET_DRINK";
const ADD_DRINK = "ADD_DRINK";
const REMOVE_DRINK = "REMOVE_DRINK";

const drinksReducer = (currentDrinks, action) => {
    switch (action.type) {
        case SET_DRINK:
            return action.drinks;
        case ADD_DRINK:
            return [...currentDrinks, action.drink];
        case REMOVE_DRINK:
            return currentDrinks.filter(drink => drink.drink_id !== action.drink_id);
        default:
            throw new Error("Should not get here");
    }
}

export const DrinkContext = React.createContext({
    drinks: [],
    isLoading: false,
    clear: () => { },
    loadDrinks: () => { },
    addDrink: () => { },
    removeDrink: () => { }
});

const DrinkContextProvider = props => {

    const { sendRequest, clear, isLoading, error, responseData, reqId, reqExtra } = useHttp();
    const [drinksState, drinksDispatch] = useReducer(drinksReducer, initialState);

    const handleLoadDrinks = useCallback(() => {
        sendRequest(
            ENDPOINTS.DRINKS.GET,
            "GET",
            null,
            SET_DRINK,
        )
    }, [sendRequest]);

    const handleAddDrink = useCallback((drink) => {
        sendRequest(
            ENDPOINTS.DRINKS.POST,
            "POST",
            JSON.stringify({ ...drink }),
            ADD_DRINK,
            { ...drink },
        )
    }, [sendRequest]);
    const handleRemoveDrinks = useCallback((drink_id) => {
        sendRequest(
            ENDPOINTS.DRINKS.DELETE.concat(`${drink_id}.json`),
            "DELETE",
            drink_id,
            REMOVE_DRINK,
            { drink_id }
        )
    }, [sendRequest]);

    useEffect(() => {
        console.log("Getting drinks");
        handleLoadDrinks();
    }, [handleLoadDrinks]);

    useEffect(() => {
        if (!isLoading && !error) {
            switch (reqId) {
                case SET_DRINK:
                    // * transform responseData
                    const drinks = [];
                    for (let drink_id in responseData) {
                        drinks.push({
                            drink_id,
                            ...responseData[drink_id]
                        })
                    }
                    drinksDispatch({ type: reqId, drinks: drinks });
                    break;
                case ADD_DRINK:

                    drinksDispatch({
                        type: reqId, drink: {
                            drink_id: responseData.name,
                            ...reqExtra
                        }
                    });
                    break;
                case REMOVE_DRINK:
                    drinksDispatch({ type: reqId, drink_id: reqExtra.drink_id });
                    break;
                default:
                    break;
            }
        }
    }, [isLoading, error, responseData, reqId, reqExtra]);

    return (
        <DrinkContext.Provider value={{
            drinks: drinksState,
            loadDrinks: handleLoadDrinks,
            addDrink: handleAddDrink,
            removeDrink: handleRemoveDrinks,
            isLoading: isLoading,
            clear: clear
        }}>
            {props.children}
        </DrinkContext.Provider>
    )
}

export default DrinkContextProvider;