import React, { useContext } from "react";

// * Components
import IngredientItem from "./../IngredientItem/IngredientItem";

// * Contexts
import { IngredientContext } from "./../../../context/ingredients-context";

const IngredientsList = props => {

    const ingredientsContext = useContext(IngredientContext);

    return (
        <>
            {
                ingredientsContext.isLoading && (!props.ingredients || !props.ingredients.length)
                    ? <p>Loading Ingredients...</p>
                    : <>
                        {ingredientsContext.isLoading && <p>Updating Ingredients...</p>}
                        <ul className="ingredients-list">
                            {props.ingredients && props.ingredients.map((ingredient_data) => {
                                // * loop over each ingredient and pass down the ingredient data
                                return (
                                    <li
                                        key={ingredient_data.ingredient_id}
                                    >
                                        <IngredientItem
                                            ingredient={ingredient_data}
                                            onclick={props.onclick}
                                            onclickText={props.onclickText}
                                        />
                                    </li>
                                )
                            })}
                        </ul>
                    </>
            }
        </>
    )
}

export default IngredientsList;