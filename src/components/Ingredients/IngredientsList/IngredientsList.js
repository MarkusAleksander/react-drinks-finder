import React, { useContext } from "react";

import IngredientItem from "./../IngredientItem/IngredientItem";

import { IngredientContext } from "./../../../context/ingredients-context";

import Auxillary from "./../../../hoc/Auxillary/Auxillary";

import Button from "./../../UI/Button/Button";

const IngredientsList = (props) => {
    const ingredientsContext = useContext(IngredientContext);

    return (
        <Auxillary>
            {ingredientsContext.isLoading && <span>loading ingredients...</span>}
            <ul className="ingredients-list">
                {
                    ingredientsContext.ingredients && ingredientsContext.ingredients.map((ingredient) => {
                        return (
                            <li
                                key={ingredient.id}
                            >
                                <IngredientItem ingredient={ingredient} onclick={props.onclick} />
                                <Button onclick={ingredientsContext.removeIngredient.bind(null, ingredient.id)}>Remove</Button>
                            </li>
                        )
                    })
                }
            </ul>
        </Auxillary>
    )
}

export default IngredientsList;