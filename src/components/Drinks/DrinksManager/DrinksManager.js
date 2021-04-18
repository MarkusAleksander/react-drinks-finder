import React from "react";

import Auxillary from "./../../../hoc/Auxillary/Auxillary";

import DrinksForm from "../DrinksForm/DrinksForm";
import DrinksList from "../DrinksList/DrinksList";

const DrinksManager = () => {

    return (
        <Auxillary>
            <DrinksForm />
            <DrinksList />
        </Auxillary>
    )

}

export default DrinksManager;