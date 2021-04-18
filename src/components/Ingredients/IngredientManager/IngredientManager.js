import React from "react";

import Auxillary from "./../../../hoc/Auxillary/Auxillary";

import IngredientForm from "../IngredientsForm/IngredientsForm";
import IngredientList from "../IngredientsList/IngredientsList";

const IngredientManager = () => {

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