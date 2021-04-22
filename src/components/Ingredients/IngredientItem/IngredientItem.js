import React, { useContext } from "react";

// * Components
import Card from "./../../UI/Card/Card";

// * Contexts
import { IngredientContext } from "./../../../context/ingredients-context";


const IngredientItem = props => {
    const ingredientContext = useContext(IngredientContext);

    // * determine ingredient name from passed ingredient id
    const ing_data = ingredientContext.ingredients.find(ing => ing.ingredient_id === props.ingredient.ingredient_id);

    return (
        <>
            {
                // * if no data found, render nothing
                ing_data ?
                    <Card>
                        {
                            // * if we have quantity and measurement, render them as well as the ingredient name
                            <p>
                                {(props.ingredient.quantity && props.ingredient.measurement ?
                                    `${props.ingredient.quantity}${props.ingredient.measurement} ` : "").concat(ing_data.ingredient)}
                                {props.onclick ? <span onClick={() => props.onclick(props.ingredient.ingredient_id)}>{props.onclickText ? props.onclickText : null}</span> : null}
                            </p>
                        }
                    </Card>
                    : <p>Ingredient not found!</p>
            }

        </>
    )
}

export default IngredientItem;