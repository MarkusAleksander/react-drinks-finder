import React, { useContext } from "react";

// * Components
import DrinksForm from "../DrinksForm/DrinksForm";
import DrinksList from "../DrinksList/DrinksList";

// * Contexts
import { DrinkContext } from "./../../../context/drinks-context";

const DrinksManager = props => {
    const drinksContext = useContext(DrinkContext);

    return (
        <>
            {/* display a form to add drinks */}
            <DrinksForm />
            {/* display the list of added drinks */}
            <DrinksList
                drinks={drinksContext.drinks}
                onclick={drinksContext.removeDrink}
                onclickText="Remove"
            />
        </>
    )
}

export default DrinksManager;