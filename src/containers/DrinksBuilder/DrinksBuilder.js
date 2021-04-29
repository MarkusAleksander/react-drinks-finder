import React from "react";

// * Components
import IngredientsManager from "../../components/Ingredients/IngredientsManager/IngredientsManager";
import DrinksManager from "../../components/Drinks/DrinksManager/DrinksManager";

// * UI Components
import PaperGridContainer from "../../components/UI/PaperGridContainer/PaperGridContainer";

const DrinksBuilder = () => {
    return (
        <PaperGridContainer>
            <IngredientsManager md={4} />
            <DrinksManager md={8} />
        </PaperGridContainer>
    )
}

export default DrinksBuilder;