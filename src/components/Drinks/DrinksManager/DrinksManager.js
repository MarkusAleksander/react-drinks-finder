import React, { useContext } from "react";

import { DrinkContext } from "./../../../context/drinks-context";

import DrinksForm from "../DrinksForm/DrinksForm";
import DrinksList from "../DrinksList/DrinksList";

const DrinksManager = () => {

    const drinksContext = useContext(DrinkContext);

    return (
        <>
            <DrinksForm />
            {drinksContext.isLoading && <span>loading drinks...</span>}
            <DrinksList
                drinks={drinksContext.drinks}
                removeDrink={drinksContext.removeDrink}
            />
        </>
    )
}

export default DrinksManager;