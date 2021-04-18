import React from "react";

import Card from "./../../UI/Card/Card";

const IngredientItem = (props) => {
    return (
        <Card>
            <div onClick={() => { props.onclick(props.ingredient.id) }}>
                <p>{props.ingredient.ingredient}</p>
            </div>
        </Card>
    )
}

export default IngredientItem;