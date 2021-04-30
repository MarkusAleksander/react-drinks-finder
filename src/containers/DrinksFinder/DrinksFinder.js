import React from "react";

// * Components
import DrinksFilter from "./../../components/Drinks/DrinksFilter/DrinksFilter";

// * UI Components
import PaperGridContainer from "../../components/UI/PaperGridContainer/PaperGridContainer";


const DrinksFinder = () => {
    return (
        <PaperGridContainer>
            <DrinksFilter md={6} />
        </PaperGridContainer>
    )
}

export default DrinksFinder;