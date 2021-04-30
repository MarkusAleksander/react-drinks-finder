import React, { useContext } from "react";

// * Components
import IngredientsForm from "../IngredientsForm/IngredientsForm";
import IngredientList from "../IngredientsList/IngredientsList";

// * UI Components
import GridContainer from './../../UI/GridContainer/GridContainer';
import GridItem from "./../../UI/GridItem/GridItem";

// * Contexts
import { IngredientContext } from "./../../../context/ingredients-context";

const IngredientsManager = props => {
    const ingredientsContext = useContext(IngredientContext);

    return (
        <GridContainer>
            <GridItem>
                <IngredientsForm />
            </GridItem>
            <GridItem>
                <IngredientList
                    ingredients={ingredientsContext.ingredients}
                    onRemove={ingredientsContext.removeIngredient}
                />
            </GridItem>
        </GridContainer>

    )
}

export default IngredientsManager;