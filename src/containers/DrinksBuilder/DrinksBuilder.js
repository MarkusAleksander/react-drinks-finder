import React from "react";

import Auxillary from "../../hoc/Auxillary/Auxillary";

import Column from "../../components/UI/Column/Column";

import IngredientsManager from "../../components/Ingredients/IngredientsManager/IngredientsManager";
import DrinksManager from "../../components/Drinks/DrinksManager/DrinksManager";

const DrinksBuilder = () => {
    return (
        <Auxillary>
            <Column>
                <IngredientsManager />
                <DrinksManager />
            </Column>
        </Auxillary>
    )
}

export default DrinksBuilder;