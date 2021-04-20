import React from "react";

import IngredientItem from "./../IngredientItem/IngredientItem";

import Button from "./../../UI/Button/Button";

const IngredientsList = (props) => {

    return (
        <>
            <ul className="ingredients-list">
                {props.ingredients && props.ingredients.map((ingredient) => {
                    return (
                        <li
                            key={ingredient.ingredient_id}
                        >
                            <IngredientItem ingredient={ingredient} onclick={props.onclick} />
                            <Button onclick={(e) => { e.preventDefault(); props.removeIngredient(ingredient.ingredient_id) }}>Remove</Button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default IngredientsList;