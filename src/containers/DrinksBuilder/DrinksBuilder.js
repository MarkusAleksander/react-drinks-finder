import React from "react";

import Auxillary from "../../hoc/Auxillary/Auxillary";

import Column from "../../components/UI/Column/Column";

import DrinksForm from "../../components/Drinks/DrinksForm/DrinksForm";
import IngredientManager from "../../components/Ingredients/IngredientManager/IngredientManager";

const DrinksBuilder = () => {


    const handleAddDrink = (drink) => {
        console.log(drink);
    }

    return (
        <Auxillary>
            <Column>
                <IngredientManager />
                <DrinksForm onAddDrink={handleAddDrink} />
                {/* <DrinkRecipes /> */}
            </Column>
        </Auxillary>
    )
}

export default DrinksBuilder;