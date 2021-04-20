import React, { useContext } from "react";

import Card from "./../../UI/Card/Card";

import { IngredientContext } from "./../../../context/ingredients-context";


const IngredientItem = (props) => {

    const ingredientContext = useContext(IngredientContext);

    const ing_data = ingredientContext.ingredients.find(ing => ing.ingredient_id === props.ingredient.ingredient_id);

    return (
        <>
            {
                ing_data ?
                    <Card>
                        <div onClick={() => { props.onclick(props.ingredient.ingredient_id) }}>
                            {
                                props.ingredient.quantity && props.ingredient.measurement
                                    ? <p>{props.ingredient.quantity}{props.ingredient.measurement} {ing_data.ingredient}</p>
                                    : <p>{ing_data.ingredient}</p>
                            }
                        </div>
                    </Card>
                    : null
            }

        </>
    )
}

export default IngredientItem;