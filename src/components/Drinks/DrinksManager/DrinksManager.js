import React, { useContext } from "react";

// * Components
import DrinksForm from "../DrinksForm/DrinksForm";
import DrinksList from "../DrinksList/DrinksList";

// * UI Components
import GridContainer from './../../UI/GridContainer/GridContainer';
import GridItem from "./../../UI/GridItem/GridItem";

import Divider from "@material-ui/core/Divider";

// * Contexts
import { DrinkContext } from "./../../../context/drinks-context";

const DrinksManager = props => {
    const drinksContext = useContext(DrinkContext);

    return (
        <GridContainer>
            <GridItem>
                <DrinksForm />
            </GridItem>
            <GridItem>
                <Divider />
            </GridItem>
            <GridItem>
                <DrinksList
                    drinks={drinksContext.drinks}
                    onRemove={drinksContext.removeDrink}
                />
            </GridItem>
        </GridContainer>
    )
}

export default DrinksManager;