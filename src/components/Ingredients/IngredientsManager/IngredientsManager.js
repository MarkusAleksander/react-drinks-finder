import React, { useContext } from "react";

import { IngredientContext } from "./../../../context/ingredients-context";

import IngredientForm from "../IngredientsForm/IngredientsForm";
import IngredientList from "../IngredientsList/IngredientsList";

const IngredientsManager = () => {

    const ingredientsContext = useContext(IngredientContext);

    return (
        <>
            <IngredientForm />
            {ingredientsContext.isLoading && <span>loading ingredients...</span>}
            <IngredientList
                ingredients={ingredientsContext.ingredients}
                removeIngredient={ingredientsContext.removeIngredient}
            />
        </>
    )
}

export default IngredientsManager;