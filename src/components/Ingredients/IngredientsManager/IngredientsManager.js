import React, { useContext } from "react";

// * Components
import IngredientForm from "../IngredientsForm/IngredientsForm";
import IngredientList from "../IngredientsList/IngredientsList";

// * Contexts
import { IngredientContext } from "./../../../context/ingredients-context";

const IngredientsManager = props => {
    const ingredientsContext = useContext(IngredientContext);

    return (
        <>
            {/* * display a form to add ingredients */}
            <IngredientForm />
            {/* * display the list of added ingredients */}
            <IngredientList
                ingredients={ingredientsContext.ingredients}
                onRemove={ingredientsContext.removeIngredient}
            />
        </>
    )
}

export default IngredientsManager;