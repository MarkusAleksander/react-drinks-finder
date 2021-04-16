import React from "react";

const IngredientItem = (props) => {
    return (
        <div onClick={() => { props.onclick(props.ingredient.id) }}>{props.ingredient.ingredient}</div>
    )
}

export default IngredientItem;