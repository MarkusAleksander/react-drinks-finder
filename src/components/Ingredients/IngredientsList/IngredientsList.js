import React, { useContext } from "react";

import IngredientItem from "./../IngredientItem/IngredientItem";

import { IngredientContext } from "./../../../context/ingredients-context";

import Auxillary from "./../../../hoc/Auxillary/Auxillary";

const IngredientsList = (props) => {
    const ingredients = useContext(IngredientContext);

    return (
        <Auxillary>
            {ingredients.isLoading && <span>loading ingredients...</span>}
            <ul className="ingredients-list">
                {
                    ingredients.ingredients && ingredients.ingredients.map((ingredient) => {
                        return (
                            <li
                                key={ingredient.id}
                            >
                                <IngredientItem ingredient={ingredient} onclick={props.onclick} />
                            </li>
                        )
                    })
                }
            </ul>
        </Auxillary>
    )
}

export default IngredientsList;