import React, { useCallback, useEffect } from "react";

import Auxillary from "./../../../hoc/Auxillary/Auxillary";

import IngredientForm from "../IngredientsForm/IngredientsForm";
import IngredientList from "../IngredientsList/IngredientsList";

// import useHttp from "./../../../hooks/http";
// import ENDPOINTS from "./../../../config/urls";

// const ADD_INGREDIENT = "ADD_INGREDIENT";
// const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";

const IngredientManager = () => {

    // const { isLoading, error, responseData, reqId, reqExtra, sendRequest } = useHttp();
    // const [ingredients, dispatchIngredients] = useReducer(ingredientReducer, []);

    // useEffect(() => {
    //     if (!isLoading && !error) {
    //         switch (reqId) {
    //             case ADD_INGREDIENT:
    //                 dispatchIngredients({
    //                     type: "ADD",
    //                     ingredient: {
    //                         ...reqExtra,
    //                         id: responseData.name
    //                     }
    //                 });
    //                 break;
    //             case REMOVE_INGREDIENT:
    //                 dispatchIngredients({
    //                     type: "DELETE",
    //                     id: reqExtra
    //                 });
    //                 break;
    //             default:
    //                 break
    //         }
    //     }
    // }, [isLoading, error, reqId, reqExtra, responseData]);

    // const handleAddIngredient = useCallback((ingredient) => {
    //     sendRequest(
    //         ENDPOINTS.INGREDIENTS.POST,
    //         "POST",
    //         JSON.stringify({ ingredient }),
    //         ADD_INGREDIENT,
    //         { ingredient: ingredient },
    //     )
    // }, [sendRequest]);

    // const handleRemoveIngredient = useCallback((ingredientId) => {
    //     sendRequest(
    //         ENDPOINTS.INGREDIENTS.DELETE,
    //         "DELETE",
    //         ingredientId,
    //         REMOVE_INGREDIENT,
    //         { id: ingredientId }
    //     )
    // }, [sendRequest]);

    return (
        <Auxillary>
            {/* <IngredientForm onAddIngredient={handleAddIngredient} /> */}
            <IngredientForm />
            {/* {isLoading && <span>Is loading...</span>} */}
            {/* <IngredientList ingredients={ingredients} onclick={handleRemoveIngredient} /> */}
            <IngredientList />
        </Auxillary>
    )
}

export default IngredientManager;